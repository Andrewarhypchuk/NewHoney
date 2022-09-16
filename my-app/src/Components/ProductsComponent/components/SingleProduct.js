import React from "react";
import { selectLogged } from "../../../Redux/userSettings-reducer";

import TranslateComponent from './../../TranslateComponent/TranslateComponent';
import ProductModal from "./ProductModal";
import { useSelector } from 'react-redux';

const SingleProduct = ({ product }) => {
    const isLogged = useSelector(selectLogged)

    return <div className="productView d-flex flex-column" key={product.id} >
        <div className="category">
            <TranslateComponent str={`Category:${product.category}`} />
        </div>
        <div><TranslateComponent str='ID:' />  {product.id}</div>
        <div> <TranslateComponent str={`Title:  ${product.title}`} /> </div>
        <img className="productImg" src={product.image} alt="product foto" />
        <div><TranslateComponent str={`Description:  ${product.description}`} /></div>
        <div><TranslateComponent str={`Rate:${product.rating.rate}`} /></div>
        <div><TranslateComponent str={`Price:  ${product.price}$`} /></div>
        {isLogged && <ProductModal productId={product.id} />}
    </div>
}

export default SingleProduct;