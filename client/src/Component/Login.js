import React, { useState, useEffect, useContext  } from 'react';
import { getData, postData } from '../Hooks/useAxios'
import '../Component/css/Login.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
 import UserContext from './user/UserContext';

// { setUser }

const Login = () => {
    const navigate = useNavigate();

    const [useremail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState("");
    const [data1, setData1] = useState("");
    // const params=useParams();
     const {setUser,user} = useContext(UserContext);
useEffect(()=>{
// console.log(localStorage.getItem('userId'));
// if(!localStorage.getItem('userId'))
// {
   
//     return
// }
// else
// {
// //     getData(`messengers/id/${localStorage.getItem('userId')}`)
// //    .then((a)=>{
// //     console.log(a,"a");
// //     setUser(a);})
// //     console.log(user);
// }
},[])

    const login = async () => {
        if (err !== "")
            return;
        const data = await getData(`messengers/login/${useremail}/${password}`)
       
        console.log(data)
       
        // localStorage.setItem('userId', JSON.stringify(data.id));
        setUserEmail("");
        setPassword("");
        if (data) {
            // console.log(user.id);
            // console.log(data);
            setUser(data);
            // console.log(user.id);
            // console.log(params.setUser);
            // params.setUser(data)
            navigate("/");
        }
        else {
            //POPUP
            alert("you don't have account");
            navigate("/Signup");

        }

    }
    const validEmail = (text) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(text))
            setErr('The email address is invalid');
        else
            setErr("");
    }


    return <>
    {/* <div style={{background:"white",height:"100px"}}></div> */}
        <div id='dd'>
            <h1 id='h1'>Hi welcome back</h1>
            <div class="inset">
                <p>
                    <label for="email">EMAIL ADDRESS</label>
                    <div><small className="p-error" >{err}</small></div>
                    <input type="text" value={useremail} name="email" id="email" onChange={e => { setUserEmail(e.target.value); validEmail(e.target.value); }} />

                </p>
                <p>
                    <label for="password">PASSWORD</label>
                    <input type="password" value={password} placeholder='' name="password" id="password" onChange={e => setPassword(e.target.value)} />
                </p>

            </div>
            <p class="p-container">
                <Link to={'/Signup'} className='link2'>
                    don't have acoount?
                </Link>
                <Link to={'/Login'} className='link'>
                    Forgot password ?
                </Link>

                <input type="submit" name="go" id="go" value="Log in" onClick={() => { login() }} />
            </p></div>
         
    </>

}
export default Login;