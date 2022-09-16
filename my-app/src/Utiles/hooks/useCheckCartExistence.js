import { useSelector, useDispatch } from 'react-redux';
import { addNewCart, selectCartByUserId } from '../../Redux/carts-reducer';
import { selectUserId } from '../../Redux/userData-reducer';
import { generatedId } from './../generateId';

const useCheckCartExistence = () =>{
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId)
    const cart = useSelector(state => selectCartByUserId(state, userId));
    const cartId = generatedId();
    if(cart === undefined){
        dispatch(addNewCart({
            id:cartId,
            userId:userId,
            products:[]
        }))
}
}
export default useCheckCartExistence;