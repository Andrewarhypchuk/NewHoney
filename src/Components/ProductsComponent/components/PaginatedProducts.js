import React, { useEffect, useState, useMemo } from "react";
import useSortProducts from './../../../Utiles/hooks/useSortProducts';
import SingleProduct from './SingleProduct';
import { useDispatch } from 'react-redux';
import { setProducts,selectGetProductsStatus } from './../../../Redux/products-reducer';
import { useSelector } from 'react-redux';

const PaginatedProducts = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectGetProductsStatus);
    const products = useSortProducts();

    useEffect(() => {
        products.length === 0 && dispatch(setProducts())
    }, [])

    if(status === 'loading'){
        return <h3>Loading...</h3>
    }

    return (
        <>
            {products.map((product) => {
                return <SingleProduct key={product.id} product={product} />
            })}
        </>
    );
}

export default PaginatedProducts;