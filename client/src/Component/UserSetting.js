import React, { useState, useEffect, createRef,useRef , useContext} from 'react';
import { getData,putData, postData } from '../Hooks/useAxios'
import '../Component/css/Login.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { confirmDialog } from 'primereact/confirmdialog';
import ProfilePicture from "@dsalvagni/react-profile-picture"
import "@dsalvagni/react-profile-picture/dist/ProfilePicture.css"
import { ImageSelect } from './Profile';
import UserContext from './user/UserContext';

const UserSetting=()=> {
  const navigate = useNavigate();
 const {user} = useContext(UserContext);
    const [useremail, setUserEmail] = useState(user.email);
    const [userename, setUserName] = useState(user.name);
    const [userephone, setUserPhone] = useState(user.phone);
    const [imageUrl, setImageUrl] = useState(user.image);


console.log(user);
   
    const change=()=>{
        
        const obj={
            "id":user.id,
            "name":userename,
            "email":useremail,
            "phone":userephone
        }

        putData('messengers/',obj).then((msg)=>{
        if(msg==='Messenger was updated successfully.')
        navigate("/");
        else
        alert("erorr")
    }).
    catch((err)=>{
    console.log(err);})
}

console.log(user);
  return <>
  <ImageSelect imageUrl={imageUrl} setImageUrl={setImageUrl} />

<div style={{ height: "50px"}}></div>
            <p>
                <label for="email">USER NAME</label>
                <input type="text" value={userename}  id="password" onChange={e =>{ setUserName(e.target.value);} }/>
                 
            </p>
        <p>
                <label for="email">USER PHONE</label>
                <input type="text" value={userephone}  id="password" onChange={e =>{ setUserPhone(e.target.value);} }/>
                 
            </p>
         
       
        <p class="p-container">
    
            <input type="submit" name="go" id="go" value="ok" style={{marginLeft: "20%",paddingLeft:"8%",paddingRight:"8%"}} onClick={()=>{change()}} />
            <input type="submit"  value="cancel" style={{marginLeft: "-40%"  }}
            onClick={()=>{
              //לשים את הפרטים של הuser
              setUserEmail(user.email);
              setUserName(user.name);
              setUserPhone(user.phone);

             }} />
        </p>
  
  
  </>                
      
                 
          
      
       
    
}
export default UserSetting;
