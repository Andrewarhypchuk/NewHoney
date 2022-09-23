import React from "react";

import FilterByCategory from "./components/CategoriesDropDown";
import SortDropDown from "./components/SortDropDown";
import SearchProductByProductId from "./components/SearchProductByProductId";
import PaginatedProducts from "./components/PaginatedProducts";

const ProductsContainerComponent = () => {

    return <div className="d-flex flex-column align-items-center">
        <SearchProductByProductId />
        <div className="dropdowns_container">
            <FilterByCategory />
            <SortDropDown />
        </div>
        <div className="d-flex flex-wrap align-items-start justify-content-center productsContainer ">
            <PaginatedProducts />
        </div>
    </div>

}

export default ProductsContainerComponent;