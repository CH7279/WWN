
import React, { useState, useEffect, createRef,useRef } from 'react';
import { getData, postData } from '../Hooks/useAxios'
import '../Component/css/Login.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { confirmDialog } from 'primereact/confirmdialog';


const Signup = () => {
    const navigate = useNavigate();

    const [useremail, setUserEmail] = useState('');
    const [userename, setUserName] = useState('');
    const [userephone, setUserPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
    const [err, setErr] = useState("");
    const toast = useRef(null);
    const [errorMessage, setErrorMessage] = useState('');
    //צריך סיסמא חזקה ובדיקת תקינות טלפון

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        console.log("kkkkkkkkkk");
        confirmDialog({
            message: 'if you want to be a messenger, click OK to send the details for compatibility check',
            header: 'Thank you for joining',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };


    const ErrorMessage=(str)=> {
        setErrorMessage(str);
        return;
      }
    const create=()=>{
        if(!useremail||!userename||!userephone||!password)
        {
            ErrorMessage('All fields are required');
            return;
        }
        const obj={
            "password":password,
            "name":userename,
            "email":useremail,
            "phone":userephone
        }

     postData('messengers/',obj).then((msg)=>{
        if(msg==='add Messenger')
        navigate("/");
        if(msg.response.data.message==='Duplicate username')
        navigate("/Login");
    }).
    catch((err)=>{
    console.log(err);})
}

const ConfirmPassword=()=>{
    if(password!=confirmpassword)
    {
        setconfirmPassword("");
        ErrorMessage('The passwords are different, try again');
    }
    else{
        setErrorMessage("");

    }
}

    const validEmail = (text) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(text))
            setErr('The email address is invalid');
        else
            setErr("");
    }


    return <> 
    <div id='dd'>
        <h1 id='h1'>Welcome</h1>
        <div class="inset">
            <p>
                <label for="email">EMAIL ADDRESS</label>
                <div><small className="p-error" >{err}</small></div>
                <input type="text" value={useremail} name="email" id="password" onChange={e =>{ setUserEmail(e.target.value); validEmail(e.target.value);} }/>
                 
            </p>
            <p>
                <label for="password">PASSWORD</label>
                <input type="password" value={password} placeholder='' name="password" id="password" onChange={e => setPassword(e.target.value)}/>
            </p>
            <p>
                <label for="password">CONFIRM PASSWORD</label>
                <input type="password" value={confirmpassword} placeholder='' name="password" id="password" onChange={(e )=> {setconfirmPassword(e.target.value); }} onBlur={ConfirmPassword}/>
            </p>
            <p>
                <label for="email">USER NAME</label>
                <input type="text" value={userename}  id="password" onChange={e =>{ setUserName(e.target.value);} }/>
                 
            </p>
        <p>
                <label for="email">USER PHONE</label>
                <input type="text" value={userephone}  id="password" onChange={e =>{ setUserPhone(e.target.value);} }/>
                 
            </p>
            {errorMessage && <div className="p-error">{errorMessage}</div>}
        </div>
        <p class="p-container">
    
            <input type="submit" name="go" id="go" value="creat account" onClick={()=>{create();confirm1()}} />
        </p></div>   
    </>



}
export default Signup;