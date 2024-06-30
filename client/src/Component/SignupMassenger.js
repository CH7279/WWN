
import React, { useState, useEffect, createRef,useRef , useContext} from 'react';
import { getData, postData } from '../Hooks/useAxios'
import '../Component/css/Login.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { confirmDialog } from 'primereact/confirmdialog';
import Uploud from './Uploud'
import UserContext from './user/UserContext';


const SignupMassenger = () => {
    const navigate = useNavigate();


    const [usereplace, setUserplace] = useState('');
    const [imgPropil, setimgPropil] = useState('');
    const [imgId, setimgId] = useState('');
    const [imgFace, setimgFace] = useState('');
    // const toast = useRef(null);
    const [errorMessage, setErrorMessage] = useState('');
    const {user} = useContext(UserContext);
 

    // const accept = () => {
    //     toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    // }

    // const reject = () => {
    //     toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    // }

    // const confirm1 = () => {
    //     console.log("kkkkkkkkkk");
    //     confirmDialog({
    //         message: 'if you want to be a messenger, click OK to send the details for compatibility check',
    //         header: 'Thank you for joining',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept,
    //         reject
    //     });
    // };
    const customBase64Upload = (base64data1) => {
        setimgId(base64data1);
    }
    const customBase64Upload1 = (base64data1) => {
        setimgFace(base64data1);
    } 
    const customBase64Upload2 = (base64data1) => {
        setimgPropil(base64data1);
    }

    const ErrorMessage=(str)=> {
        setErrorMessage(str);
        return;
      }
    const create=()=>{
        console.log(user);
        if(!imgId||!imgFace)
        {
            ErrorMessage('Id image and face image fields are required');
            return;
        }
        const obj={
        password:user.password,
        name:user.name,
        imgPropil:imgPropil,
        imgId:imgId,
        imgFace:imgFace,
        email:user.email,
        phone:user.phone,
        place:usereplace
        }

     postData('messengers_to_add/',obj).then((msg)=>{
        if(msg==='add messengers_to_add')
        navigate("/");
       else
       console.log(msg);
    }).
    catch((err)=>{
    console.log(err);})
}



    return <> 
    <div id='dd'>
        <h1 id='h1'>Welcome</h1>
        <div class="inset">
          
           
            <p>
               <label for="email">WHERE ARE YOU INTERESTED IN BEING A COURIER?</label>
                <input type="text" value={usereplace}  id="password" onChange={e =>{ setUserplace(e.target.value);} }/>
                 
            </p>  
            <label >ID IMAGE</label>
             <br/>
             <Uploud customBase64Upload={customBase64Upload}/>
             <br/>
            <label >ID AND FACE IMAGE</label>
             <br/>
             <Uploud customBase64Upload={customBase64Upload1}/>
             <br/>
            <label >PROPILE IMAGE</label>
             <br/>
             <Uploud customBase64Upload={customBase64Upload2}/>
             <br/>
            {errorMessage && <div className="p-error">{errorMessage}</div>}
        </div>
        <p class="p-container">
    
            <input type="submit" name="go" id="go" value="creat account" onClick={()=>{create();
                // confirm1()
                }} />
        </p></div><div style={{ "height": "76px" }}></div>
    </>



}
export default SignupMassenger;