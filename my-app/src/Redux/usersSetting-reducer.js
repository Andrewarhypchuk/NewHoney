import {createSlice} from '@reduxjs/toolkit'

 export const UserSettingsSlice = createSlice({
      name: 'userSettings',
      initialState: { value:{
          isLogged:false,
          isAdmin:false,
          id:'',
          name:'You have to login',
          fullName:'',
          password:'',
          theme:'Light',
          phone:'',
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
           },
           setFullName :(state,action)=>{
            state.value.fullName = action.payload
          },
          setPhone :(state,action)=>{
            state.value.phone = action.payload
          },
          setId:(state,action)=>{
            state.value.id = action.payload
          }
      }
  })

export const { changeTheme,toggleAdmin,changeLanguage,setName,toggleIsLogged,setFullName,setPhone,setId }  = UserSettingsSlice.actions;
export default UserSettingsSlice.reducer;