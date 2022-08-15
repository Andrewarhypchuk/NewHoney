import { React } from 'react';
import {useSelector} from "react-redux";
import TranslateComponent from '../TranslateComponent/TranslateComponent';
const Users = () =>{
    const userSettingsAdmin = useSelector((state)=> state.usersSetting.value.isAdmin);
    const users = useSelector((state)=>state.users)
    console.log(users)
 
    let UsersList = users.users.map((user)=>{
        return <div className='userItem'  key={user.id}>
            <div> Name:  {user.name.firstname}</div>
            <div>UserName:  {user.username}</div>
            <div> Email:  {user.email}</div>
            <div> Phone:  {user.phone}</div>
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
    })

    if(userSettingsAdmin){
        return(
            <div className='d-flex flex-column align-items-center'> 
             <TranslateComponent str='List of  Users' /> 
              <div className='userList'>{UsersList}</div>
            </div>
        )
    }else{
        return(
        <div className='d-flex flex-column align-items-center p-10'> 
    <TranslateComponent str='You can not see ,add ,edit , delete other users cause you are not admin' />
        </div>
        )
    }
}
export default Users;
