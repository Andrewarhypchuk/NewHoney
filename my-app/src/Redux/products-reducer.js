export const SET_PRODUCTS = "SET-PRODUCTS";


let initialState = {
    products:[]
}

const ProductsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state, products: [...action.setProducts]
            }
        default: return state;
    }
}
export const setProductsAC = (setProducts) => ({ type: SET_PRODUCTS, setProducts });

export default ProductsReducer;