
import React, { useState, useEffect, createRef,useRef , useContext} from 'react';
import { getData, postData } from '../Hooks/useAxios'
import '../Component/css/Login.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { confirmDialog } from 'primereact/confirmdialog';
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from 'primereact/dialog';
import UserContext from './user/UserContext';


const Notes = () => {
    const navigate = useNavigate();

    
    const [name, setName] = useState('');
    // const [place, setPlace] = useState('');
    const [request, setRequest] = useState('');
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { user } = useContext(UserContext);
  

    const ErrorMessage=(str)=> {
        setErrorMessage(str);
        return;
      }
const dialog=(msg)=>{

    return   <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
    <p className="m-0">
       {msg}
    </p>
</Dialog>
}


    const create=()=>{
        if(!request||!name)
        {
            ErrorMessage('Name for prayer and request are required');
            return;
        }
        const obj={
            "name_to_prayer":name,
            "request":request,
            "nameUser":user.name,
            "emailUser":user.email,
            "phonUser":user.phone
        }
        console.log(obj);

     postData('notes/',obj).then((msg)=>{
        console.log(msg);

        if(msg==='add note')
        {
            console.log("llllllllllllllll");
            dialog("Your feedback has been sent successfully, thank you very much!");
        }
        navigate("/");
       
    }).
    catch((err)=>{
            console.log("ffffffffffffffff");
            console.log(err);
        dialog("There is a problem with the feedback system, try again")
})
}



   

    return <> 
    <div id='dd'>
        <h1 id='h1'>SEND NOTE</h1>
        <div class="inset">
            <p>
                <label >NAME TO PRAYER</label>
              
                <input type="text" value={name}  id="password" onChange={e =>{ setName(e.target.value);} }/>
                 
            </p>
            {/* <p>
                <label >WHERE?</label>
                <input type="text" value={place} placeholder=''  id="password" onChange={e => setPlace(e.target.value)}/>
            </p> */}
            <p>
                <label >REQUEST</label>

                <InputTextarea style={
                    {height: "100px",width:"100%",padding:"8px 5px",
                    background:"linear-gradient(#FFF3E4, #FFFFFF)",
                    border:"1px solid #222",
                    boxShadow:"0 1px 0 rgba(255,255,255,0.1)",
                    borderRadius:"0.3em",
                    marginBottom:"20px"}
  } type="text" placeholder=''  id="password" onChange={(e )=> {setRequest(e.target.value); }}/>
            </p>
           
            {errorMessage && <div className="p-error">{errorMessage}</div>}
        </div>
        <p class="p-container">
    
            <input type="submit" name="go" id="go" value="Send" onClick={()=>{create();setVisible(true)}} />
        </p></div>
    </>



}
export default Notes;