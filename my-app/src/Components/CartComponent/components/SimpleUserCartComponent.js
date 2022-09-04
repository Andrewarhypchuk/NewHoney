import React from "react";
import { useSelector } from 'react-redux';
import { selectCarts } from "../../../Redux/carts-reducer";
import { selectId } from "../../../Redux/userData-reducer";
import { selectUsers } from "../../../Redux/users-reducer";
import { selectProducts } from './../../../Redux/products-reducer';
import SingleUserCart from "./SingleUserCart";

const SipmleUserCart = () =>{
    const products = useSelector(selectProducts);
    const carts = useSelector(selectCarts);
    const userId = useSelector(selectId);
    const users = useSelector(selectUsers);
    const currentUser = users.users.filter( (user) =>  user.id === userId )
    const currentCart = carts.carts.filter( (cart) =>  cart.userId === userId )
    const findProduct = (id) => {
        const product = products.products.filter((product) => product.id === id)
        return product[0]
    }
    const createProductsList = (list) => {
        const productList = [];
        list.forEach(element => {
            const product = findProduct(element.productId)
            productList.push(product)
        });
        return productList
    }
    const productsList = createProductsList(currentCart[0].products)
return(
    <>
    <SingleUserCart cart={currentCart[0]} user={currentUser[0]} productsList={productsList}  />
    </>
)
}
export default SipmleUserCart;