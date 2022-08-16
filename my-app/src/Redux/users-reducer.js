import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const setUsers = createAsyncThunk(
    'users/setUsers',
    async (dispatch,getState)=>{
        return await axios.get('https://fakestoreapi.com/users').then(
            (response) => response.data
        );
    }
);


export const UsersSlice = createSlice({
    name:'users',
    initialState:{
        users:[],
        status:null
    },
    extraReducers: {
        [setUsers.pending]: (state, action) => {
            state.status = 'loading'
        },
        [setUsers.fulfilled]: (state, action) => {
            state.status = 'success'
            state.users = action.payload
        },
        [setUsers.rejected]: (state, action) => {
            state.status = 'failed'
        }

    }
})

export const  selectUsers = (state)=>state.users;

export default UsersSlice.reducer;