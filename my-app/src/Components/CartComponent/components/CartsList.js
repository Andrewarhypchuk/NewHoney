import React from "react";
import { useSelector } from 'react-redux';


import SingleUserCart from './SingleUserCart';
import { selectUsers } from '../../../Redux/users-reducer';
import { selectProducts } from './../../../Redux/products-reducer';
import { selectCarts } from '../../../Redux/carts-reducer';

const CartsList = () => {
    const carts = useSelector(selectCarts);
    const users = useSelector(selectUsers);
    const products = useSelector(selectProducts);

    const findUser = (id) => {
        const user = users.users.filter((user) => user.id === id)
        return user[0]
    }
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

    return (
        <div className="d-flex flex-column">
            {carts.carts.map((cart) => {
                const user = findUser(cart.userId)
                const productsList = createProductsList(cart.products)
                
                return <SingleUserCart user={user} cart={cart} key={cart.id} productsList={productsList} />
            })}
        </div>
    )
}
export default CartsList;