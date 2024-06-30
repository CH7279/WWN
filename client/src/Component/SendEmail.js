import React, { useState, useEffect, createRef,useRef, useContext} from 'react';
import { getData, postData } from '../Hooks/useAxios'
import '../Component/css/Login.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { InputTextarea } from "primereact/inputtextarea";
import UserContext from './user/UserContext';

const SendEmail=()=>{
    const navigate = useNavigate();
   
    const [about, setAbout] = useState('');
    const [send, setSend] = useState('');
    const [err, setErr] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const { user } = useContext(UserContext);

    const ErrorMessage=(str)=> {
        setErrorMessage(str);
        return;
      }
    const Send=()=>{
        if(!about&&!send)
        {
            ErrorMessage('No response to send');
            return;
        }

       
        const obj={
            "about":about,
            "send":send,

            
            "email":user.email,
        }

     postData('messengers/send',obj).then((msg)=>{
        if(msg==='seccsid')
        {
            console.log("seccsid");
        }
        navigate("/");
       
    }).
    catch((err)=>{
    console.log(err);
})
}



   

    return <> 
    <div id='dd'>
        <h1 id='h1'>SEND FEEDBACK</h1>
        <div class="inset">
            <p>
                <label >ABOUT WHAT?</label>
              
                <input type="text" value={about}  id="password" onChange={e =>{ setAbout(e.target.value);} }/>
                 
            </p>
           
            <p>
                <label >WHAT DO YOU WANT TO TELL US?</label>

                <InputTextarea style={
                    {height: "100px",width:"100%",padding:"8px 5px",
                    background:"linear-gradient(#FFF3E4, #FFFFFF)",
                    border:"1px solid #222",
                    boxShadow:"0 1px 0 rgba(255,255,255,0.1)",
                    borderRadius:"0.3em",
                    marginBottom:"20px"}
                    }type="text" placeholder=''  id="password" onChange={(e )=> {setSend(e.target.value); }}/>
            </p>
            
            {errorMessage && <div className="p-error">{errorMessage}</div>}
        </div>
        <p class="p-container">
    
            <input type="submit" name="go" id="go" value="Send" onClick={()=>{Send();}} />
        </p></div>
    </>

 
}
export default SendEmail;