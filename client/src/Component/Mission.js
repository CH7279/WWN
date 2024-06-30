import React, { useState, useEffect } from 'react';
import './css/Place.css';
import { useLocation } from 'react-router-dom';
import Head from './Head';
import { useParams } from 'react-router-dom';
import { getData, postData } from '../Hooks/useAxios'

const Mission = () => {
    // const location = useLocation();
    // console.log("location "+location.img);
    const params=useParams()
   
    const [data, setData] = useState([]);

    const get = async () => {
        const myData = await getData(`requests/${params.id}`);
        setData(myData)
    }

    useEffect(() => {
        get()
       
    }, [])
   return <>

     
    {/* <div id='img'>{props.img}</div>*/}
    
     <div id='img1'></div>
    <div id='title'>{data.name}?</div>
    <div id='addr'>{data.address}</div>
    <div id='des'>{data.description}</div>
    <div id='sgu'>{data.segula}</div>
    
    
    </>


}
export default Mission;