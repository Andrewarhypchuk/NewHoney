import { useSelector } from 'react-redux';

import { selectCartByUserId } from '../../Redux/carts-reducer';
import { selectUserId } from '../../Redux/userData-reducer';

const useModalsInformation = (productId) =>{
    const userId = useSelector(selectUserId);
    const userCart = useSelector(state => selectCartByUserId(state, userId));
    const cartId = userCart.id
    const isProductInCart = userCart.products.find((product) => product.productId === productId);
    const userProduct = userCart.products.find((product) => product.productId === productId);

    return { isProductInCart,cartId, userProduct}
}

export default useModalsInformation;