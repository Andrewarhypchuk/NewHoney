import React from "react";

import TranslateComponent from './../../TranslateComponent/TranslateComponent';
import ProductModal from "./ProductModal";

const SingleProduct = ({ product }) => {

    return <div className="productView d-flex flex-column" key={product.id} >
        <div className="category">
            <TranslateComponent str={`Category:${product.category}`} />
        </div>
        <div><TranslateComponent str='ID:' />  {product.id}</div>
        <div> <TranslateComponent str={`Title:  ${product.title}`} /> </div>
        <img className="productImg" src={product.image} />
        <div><TranslateComponent str={`Description:  ${product.description}`} /></div>
        <ProductModal productId={product.id}/>
    </div>
}

export default SingleProduct;