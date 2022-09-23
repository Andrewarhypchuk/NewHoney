import React, { useEffect, useState, useMemo } from "react";
import useSortProducts from './../../../Utiles/hooks/useSortProducts';
import SingleProduct from './SingleProduct';
import { useDispatch } from 'react-redux';
import { setProducts, selectSortValue } from './../../../Redux/products-reducer';

const PaginatedProducts = () => {
    const dispatch = useDispatch();
    const products = useSortProducts();
    useEffect(() => {
        products.length === 0 && dispatch(setProducts())
    }, [])


    return (
        <>
            {products.map((product) => {
                return <SingleProduct key={product.id} product={product} />
            })}
        </>
    );
}

export default PaginatedProducts;