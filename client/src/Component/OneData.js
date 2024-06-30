import React from 'react';
import './css/OneData.css'
import { Link } from "react-router-dom";


const OneData = (props) => {

  if (props.relative == 'places') {
    return <>
      <div id='one'>
        <div id="img">
          {/* <img  image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"></img> */}
        </div>
        <div id="name">{props.name}</div>
        <div id="add">{props.address}</div>
        <div id="sg">{props.segula}</div>
        
        <Link to={{ pathname: "/Place", state: {relative:props.url,img:props.image,name:props.name,address:props.address, segula:props.segula}} } id="link"  >
          More info
        </Link>
      </div>
    </>
  }

  if (props.relative == 'stories') {
    return <>
      <div id='one'>
        <div id="img">
          {/* <img  image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"></img> */}
        </div>
        <div id="name">{props.title}</div>
          <div id="add">{props.story}</div>
          <div id="sg">{props.name}</div>
          <Link to={props.relative} id="link" >
            More info
          </Link>
        </div>
        </>
    
  }


}
        export default OneData;
