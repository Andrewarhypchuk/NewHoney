import { useSelector } from 'react-redux';
import { FROM_LOW_PRICE, RANDOM_PRICE } from '../consts';
import { selectProductsByCategory, selectSortValue } from './../../Redux/products-reducer';
import { FROM_HIGH_PRICE } from './../consts';

const useSortProducts = () => {
    const sortValue = useSelector(selectSortValue);
    const products = useSelector(selectProductsByCategory)
    if (sortValue === RANDOM_PRICE) {
        return products
    }
    if (sortValue === FROM_HIGH_PRICE) {
        return products.slice().sort((a, b) => b.price - a.price)
    }
    if (sortValue === FROM_LOW_PRICE) {
        return products.slice().sort((a, b) => a.price - b.price);
    }
}
export default useSortProducts;