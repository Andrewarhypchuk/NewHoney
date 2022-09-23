import { useSelector } from 'react-redux';
import { FROM_LOW_PRICE, RANDOM_PRICE, FROM_HIGH_PRICE, RANDOM_RATE } from '../consts';
import { selectProductsByFilters, selectSearchValue, selectSortValue, selectCategory } from './../../Redux/products-reducer';
import { FROM_LOW_RATE,FROM_HIGH_RATE } from './../consts';




const useSortProducts = () => {
    const sortValue = useSelector(selectSortValue);
    const searchValue = useSelector(selectSearchValue);
    const category = useSelector(selectCategory);
    const products = useSelector(selectProductsByFilters);

 
    switch (sortValue) {
        case RANDOM_PRICE:
            return  products
        case FROM_HIGH_PRICE:
            return products.slice().sort((a, b) => b.price - a.price) 
        case FROM_LOW_PRICE:
            return products.slice().sort((a, b) => a.price - b.price) 
        case FROM_HIGH_RATE:
            return products.slice().sort((a, b) => b.rating.rate - a.rating.rate) 
        case FROM_LOW_RATE:
            return products.slice().sort((a, b) => a.rating.rate - b.rating.rate) 
        case RANDOM_RATE:
            return products
        default: return products
    }
}
export default useSortProducts;