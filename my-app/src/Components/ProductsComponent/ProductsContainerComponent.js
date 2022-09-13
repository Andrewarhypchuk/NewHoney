import React from "react";

import SingleProduct from "./components/SingleProduct";
import useSortProducts from './../../Utiles/hooks/useSortProducts';
import FilterByCategory from "./components/CategoriesDropDown";
import SortDropDown from "./components/SortDropDown";

const ProductsContainerComponent = () => {
    const products = useSortProducts();

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