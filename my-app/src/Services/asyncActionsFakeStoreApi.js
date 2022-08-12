import axios from "axios";

export async function setUsers(dispatch,getState) {
    const response = axios.get('https://fakestoreapi.com/users')
        .then(res=>res.data)
        .then(json=> dispatch({ type: SET_USERS, setUsers: json }))
}





// export async function setProducts(dispatch,getState) {
//     const response = axios.get('https://fakestoreapi.com/products')
//         .then(res=>res.data)
//         .then(json=> dispatch({ type: SET_PRODUCTS, setProducts: json }))
// }
// export async function setCarts(dispatch,getState) {
//     const response = axios.get('https://fakestoreapi.com/carts')
//         .then(res=>res.data)
//         .then(json=> dispatch({ type: SET_CARTS, setCarts: json }))
// }
