
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectProductsByCategory} from './../../Redux/products-reducer';

const useSortProducts = () =>{
    const [category,setCategory] = useState(false);
    const products = useSelector(state=>selectProductsByCategory(state,category))

    return { products ,setCategory }
}
export default useSortProducts;