export const SET_CARTS = "SET-CARTS";
let initialState = {
    users:[]
}

const CartsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CARTS:
            return {
                ...state, carts: [...action.setCarts]
            }
        default: return state;
    }
}
export const setCartsAC = (setCarts) => ({ type: SET_CARTS, setCarts });

export default CartsReducer;