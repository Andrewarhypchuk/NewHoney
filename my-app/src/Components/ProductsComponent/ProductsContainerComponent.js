import React,{useEffect} from "react";
import { useDispatch } from 'react-redux';

import SingleProduct from "./components/SingleProduct";
import useSortProducts from './../../Utiles/hooks/useSortProducts';
import FilterByCategory from "./components/CategoriesDropDown";
import SortDropDown from "./components/SortDropDown";
import { setProducts } from './../../Redux/products-reducer';

const ProductsContainerComponent = () => {
    const dispatch = useDispatch();
    const products = useSortProducts();
    useEffect(()=>{
      dispatch(setProducts())
    })

    return <div className="d-flex flex-column align-items-center">
        <div className="dropdowns_container">
            <FilterByCategory />
            <SortDropDown />
        </div>
        <div className="d-flex flex-wrap align-items-start justify-content-center productsContainer ">
            {products.map((product) => {
                return <SingleProduct key={product.id} product={product} />
            })}
        </div>
    </div>

}

export default ProductsContainerComponent;