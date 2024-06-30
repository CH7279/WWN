import React, { useState , useContext} from "react";
import { InputText } from "primereact/inputtext";
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import './css/Haed.css'
// import UserContext from './user/UserContext';
import UserContext from "./user/UserContext";
import { useNavigate } from 'react-router-dom';
import Search from "./Search"
import BackButton from "./BackButton";



const Head = () => {

    const navigate = useNavigate();
  const {user} = useContext(UserContext);

    const items = [
        <button id='b' onClick={() => { navigate('/Login') }}><i className="pi pi-map-marker" id='headericons'><div id='text'>Sign in</div></i></button>,
        <button id='b' onClick={() => {
            if(!user.id)
            {
               navigate(`/Login`);
             }
             else
             navigate("/UserSetting");

         }}><i className="pi pi-map-marker" id='headericons'><div id='text'>User setting</div></i></button>,
        <button id='b' onClick={() => { navigate('/Places') }}><i className="pi pi-map-marker" id='headericons'><div id='text'>Places</div></i></button>,
        <button id='b' onClick={() => { 
            if(!user.id)
            {
               navigate(`/Login`);
             }
            else//מה לכתוב?
            navigate('/SignupMassenger') }}><i className="pi pi-map-marker" id='headericons'><div id='text'>Registration</div></i></button>,
        <button id='b' onClick={() => { 
            if(!user.id)
            {
               navigate(`/Login`);
             }
            else
            navigate('/AddPlace') }}><i className="pi pi-map-marker" id='headericons'><div id='text'>Add Place</div></i></button>,
        <button id='b' onClick={() => {
            if(!user.id)
            {
               navigate(`/Login`);
             }
            else
            navigate('/AddStory') }}><i className="pi pi-map-marker" id='headericons'><div id='text'>Add Story</div></i></button>,
        <button id='b' onClick={() => {
            if(!user.id)
            {
               navigate(`/Login`);
             }
            else
            navigate('/Notes') }}><i className="pi pi-map-marker" id='headericons'><div id='text'>Send Note</div></i></button>,
        <button id='b' onClick={() => {
            if(!user.id)
            {
               navigate(`/Login`);
             }
            else
            navigate('/SendEmail')}}><i className="pi pi-map-marker" id='headericons'><div id='text'>Feedback</div></i></button>,
    ]
    return (

        <div>
            <BackButton/>
            <Search/>
            <div className='haed'>
                <div className="menu-container">
                    {items.map((item, index) => (<div key={index} className="menu-item"> {item} </div>))}
                </div > 
             
                {/* {user.image?(<Avatar image={"//srv1/clips/קליפארט חדש/תמונות/קלקר/כדור קלקר.png"} className="mr-2" size="large" shape="circle" id='propil' />):(    <Avatar   icon="pi pi-user"  className="mr-2" size="large" shape="circle"  id='propil' />)} */}
                {/* {user.image?(<Avatar image={"P:/קליפארט חדש/תמונות/ים/גלים באוקיינוס.jpg"} className="mr-2" size="large" shape="circle" id='propil' />):(    <Avatar   icon="pi pi-user"  className="mr-2" size="large" shape="circle"  id='propil' />)} */}
                {user.image?(<Avatar  style={{left:"86%"}} image={`data:image/jpeg;base64,${user.image}`} className="mr-2" size="large" shape="circle" id='propil' />):(<Avatar  style={{left:"86%"}} icon="pi pi-user" className="mr-2" size="large" shape="circle"  id='propil' />)}
                {/* {user.image?(<Avatar image={`data:image/jpeg;base64,${user.image}`} className="mr-2" size="large" shape="circle" id='propil' />):(<Avatar icon="pi pi-user" className="mr-2" size="large" shape="circle"  id='propil' />)} */}
               
                <Badge value="0" severity="danger" id="bd" style={{left:"92%"}}/>
            </div>

        </div>

    )
}
export default Head;