
import React, { useState, useEffect, createRef,useRef , useContext } from 'react';
import { getData, postData } from '../Hooks/useAxios'
import '../Component/css/Login.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { confirmDialog } from 'primereact/confirmdialog';
import { InputTextarea } from "primereact/inputtextarea";
import UserContext from './user/UserContext';
import Uploud from './Uploud'
let  base64data="";
const AddPlace = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [Segula, setSegula] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [err, setErr] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
  


    const customBase64Upload = (base64data1) => {
        console.log("1"+base64data1);
        base64data=base64data1;
        console.log("2"+base64data);
    
    }
    

    const ErrorMessage=(str)=> {
        setErrorMessage(str);
        return;
      }
    const create=()=>{
        console.log("creat",base64data);
        if(!name||!address)
        {
            ErrorMessage('Name and address are required');
            return;
        }
        console.log("45678"+base64data);
        const obj={
            "name":name,
            "address":address,
            "Segula":Segula,
            "description":description,
            "image":base64data
        }

     postData('places_to_add/',obj).then((msg)=>{
        if(msg==='add place_to_add')
        {
            console.log(msg);
        }
        console.log(msg);
        navigate("/");
       
    }).
    catch((err)=>{
    console.log(err);})
}


   

    return <> 
    <div id='dd'>
        <h1 id='h1'>ADD PLACE</h1>
        <div class="inset">
            <p>
                <label >NAME OF THE PLACE</label>
              
                <input type="text" value={name}  id="password" onChange={e =>{ setName(e.target.value);} }/>
                 
            </p>
            <p>
                <label >ADDRESS</label>
                <input type="text" value={address} placeholder=''  id="password" onChange={e => setAddress(e.target.value)}/>
            </p>
            <p>
                <label >DESCRIPTION</label>

                <InputTextarea style={
                    {height: "100px",width:"100%",padding:"8px 5px",
                    background:"linear-gradient(#FFF3E4, #FFFFFF)",
                    border:"1px solid #222",
                    boxShadow:"0 1px 0 rgba(255,255,255,0.1)",
                    borderRadius:"0.3em",
                    marginBottom:"20px"}
  } type="text" placeholder=''  id="password" onChange={(e )=> {setDescription(e.target.value); }}/>
            </p>
            <p>
            <label >DO YOU HAVE IMAGE?</label>
            <Uploud  customBase64Upload={customBase64Upload}/>
            </p>
        <p>
            <br/>
                <label >DO YOU KNOW ABOUT SGULA?</label>
                <input type="text" value={Segula}  id="password" onChange={e =>{ setSegula(e.target.value);} }/>
                 
            </p>
            {errorMessage && <div className="p-error">{errorMessage}</div>}
        </div>
        <p class="p-container">
    
            <input type="submit" name="go" id="go" value="Send" onClick={()=>{create()}} />
        </p> <div style={{ "height": "76px" }}></div></div>
    </>



}
export default AddPlace;