import React from "react";

import SingleProduct from "./components/SingleProduct";
import useSortProducts from './../../Utiles/hooks/useSortProducts';
import CategoriesList from "./components/CategoriesDropDown";

const ProductsContainerComponent = () => {
    const { products, setCategory } = useSortProducts();

    return <div className="d-flex flex-column align-items-center">
        <CategoriesList setCategory={setCategory} />
        <div className="d-flex flex-wrap align-items-start justify-content-center productsContainer ">
             {products.map((product) => {
                return <SingleProduct key={product.id} product={product} />
            })}
        </div>
    </div>

}
export default ProductsContainerComponent