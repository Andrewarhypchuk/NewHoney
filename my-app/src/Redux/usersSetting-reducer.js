import {createSlice} from '@reduxjs/toolkit'

 export const UserSettingsSlice = createSlice({
      name: 'userSettings',
      initialState: { value:{
          isLogged:false,
          isAdmin:false,
          name:'You have to login',
          password:'',
          theme:'Light',
          language:'English'} },
      reducers: {
          changeTheme : (state,action)=>{
              state.value.theme = action.payload
          },
          changeLanguage : (state,action)=>{
              state.value.language = action.payload
          },
          toggleAdmin :(state,action)=>{
              state.value.isAdmin = !state.value.isAdmin
          },
          toggleIsLogged :(state,action)=>{
              state.value.isLogged = !state.value.isLogged
          },
          setName :(state,action)=>{
             state.value.name = action.payload
           }
      }
  })

export const { changeTheme,toggleAdmin,changeLanguage,setName,toggleIsLogged }  = UserSettingsSlice.actions;
export default UserSettingsSlice.reducer;