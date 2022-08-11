
export const TOGGLE_ADMIN = 'TOGGLE-ADMIN';
export const SET_CURRENT_USER = 'SET-CURRENT-USER';
export const SET_THEME = 'SET-THEME';

let initialState = {
    admin:false,
    currentUser:'You have to Login',
    theme:'Light'
}


const ShopReducer = (state = initialState, action) => {

    switch (action.type) {
        case   TOGGLE_ADMIN:
            return{
                ...state,admin:action.admin
            }
        case   SET_CURRENT_USER:
            console.log('statee')
            return{
                ...state,currentUser:action.currentUser
            }
        case   SET_THEME:
            console.log('statee')
            return{
                ...state,theme:action.theme
            }

        default: return state;
    }
}
    export const toggleAdminAC = (admin) => ({ type: TOGGLE_ADMIN, admin });
    export const setCurrentUserAC = (currentUser) => ({ type: SET_CURRENT_USER, currentUser});
    export const setThemeAC = (theme) => ({ type: SET_THEME, theme});

    export default ShopReducer;
