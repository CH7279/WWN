
import React, { useState, useEffect, createRef,useRef , useContext } from 'react';
import { getData, postData } from '../Hooks/useAxios'
import '../Component/css/Login.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { confirmDialog } from 'primereact/confirmdialog';
import { InputTextarea } from "primereact/inputtextarea";
import UserContext from './user/UserContext';
import Uploud from './Uploud'

const AddStory = () => {
    const navigate = useNavigate();
   
    const [place, setPlace] = useState('');
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const [err, setErr] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const { user } = useContext(UserContext);
    let  base64data="";
    const ErrorMessage=(str)=> {
        setErrorMessage(str);
        return;
      }
    const create=()=>{
        console.log(base64data);
        if(!story||!place)
        {
            ErrorMessage('place and story are required');
            return;
        }

        const obj={
            "place":place,
            "title":title,
            "story":story,
            "nameUser":user.name,
            "emailUser":user.email,
            "phonUser":user.phone,
            "img":base64data
        }
 console.log("llllllllllllllll");
     postData('Stories_to_add/',obj).then((msg)=>{
        if(msg==='add StoryToAdd')
        {
            console.log(msg);
        }
        navigate("/");
       
    }).
    catch((err)=>{
    console.log(err);})
}


const customBase64Upload = (base64data1) => {
    base64data=base64data1;
}
   

    return <> 
    <div id='dd'>
        <h1 id='h1'>ADD STORY</h1>
        <div class="inset">
            <p>
                <label >TITLE</label>
              
                <input type="text" value={title}  id="password" onChange={e =>{ setTitle(e.target.value);} }/>
                 
            </p>
            <p>
                <label >WHERE IS IT HEPPEN?</label>
                <input type="text" value={place} placeholder=''  id="password" onChange={e => setPlace(e.target.value)}/>
            </p>
            <p>
                <label >STORY</label>

                <InputTextarea style={
                    {height: "100px",width:"100%",padding:"8px 5px",
                    background:"linear-gradient(#FFF3E4, #FFFFFF)",
                    border:"1px solid #222",
                    boxShadow:"0 1px 0 rgba(255,255,255,0.1)",
                    borderRadius:"0.3em",
                    marginBottom:"20px"}
                    }type="text" placeholder=''  id="password" onChange={(e )=> {setStory(e.target.value); }}/>
            </p>
            <p>
            <label >DO YOU HAVE IMAGE?</label>
            <Uploud customBase64Upload={customBase64Upload}/>
            </p>
            {errorMessage && <div className="p-error">{errorMessage}</div>}
        </div>
        <p class="p-container">
    
            <input type="submit" name="go" id="go" value="Send" onClick={()=>{create()}} />
        </p> <div style={{ "height": "76px" }}></div></div>
    </>



}
export default AddStory;