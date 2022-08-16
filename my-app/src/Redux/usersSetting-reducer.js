import {createSlice} from '@reduxjs/toolkit'

 export const UserSettingsSlice = createSlice({
      name: 'userSettings',
      initialState: { 
          isLogged:false,
          isAdmin:false,
          name:'You have to login',
          fullName:'',
          password:'',
          theme:'Light',
          language:'English',
          phone:''},
      reducers: {
          changeTheme : (state,action)=>{
              state.theme = action.payload
          },
          changeLanguage : (state,action)=>{
              state.language = action.payload
          },
          toggleAdmin :(state,action)=>{
              state.isAdmin = !state.isAdmin
          },
          toggleIsLogged :(state,action)=>{
              state.isLogged = !state.isLogged
          },
          setName :(state,action)=>{
             state.name = action.payload
           },
           setPhone :(state,action)=>{
            state.phone = action.payload
          },
          setFullName :(state,action)=>{
            state.fullName = action.payload
          }
      }
  })

  export const  selectTheme = (state)=>state.usersSetting.theme;
  export const  selectName = (state)=>state.usersSetting.name;
  export const  selectAdmin = (state)=>state.usersSetting.isAdmin;
  export const  selectLogged = (state)=>state.usersSetting.isLogged;

export const { changeTheme,toggleAdmin,changeLanguage,setName,toggleIsLogged,setPhone,setFullName }  = UserSettingsSlice.actions;
export default UserSettingsSlice.reducer;