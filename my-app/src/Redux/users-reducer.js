import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

export const getUsers = createAsyncThunk(
    'users/getUsers',
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
        [getUsers.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'success'
            state.users = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.status = 'failed'
        }

    }
})


export default UsersSlice.reducer;