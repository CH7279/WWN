import React, { useState, useEffect } from 'react';
import Head from './Head';
import { InputText } from "primereact/inputtext";
import { useParams } from 'react-router-dom';
import { getData, postData } from '../Hooks/useAxios'


const Story = () => {

    const params=useParams()
   
    const [data, setData] = useState([]);

    const get = async () => {
        const myData = await getData(`stories/${params.id}`);
        setData(myData)
    }

    useEffect(() => {
        get()
       
    }, [])


    console.log(data);
    return <>
   
      <div class="flex align-items-center justify-content-center">
        <span className="p-input-icon-left">
            <i className="pi pi-search" id='icon' />
            <InputText placeholder="Search" onInput={(e) => {}} id='search' />
        </span>
    </div>
    <div id='img1'></div>
    <div id='title'>{data.title}</div>
    <div id='addr'>{data.place}</div>
    <div id='des'>{data.story}</div>
    <div id='sgu'>{data.name}</div>
    
    </>

}
export default Story;

