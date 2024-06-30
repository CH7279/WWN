import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import { InputText } from "primereact/inputtext";
import './css/Data.css'
import { getData, postData } from '../Hooks/useAxios'
import OneData from './OneData';


const Data=(props) =>{
    const [data1, setData1] = useState([]);

    const get = async (url) => {
        const myData = await getData(url);
        setData1(myData)
    }

    useEffect(() => {
        get(props.url)
       
    }, [])


    const forFilter = (p, args) => {
        //איך לעשות שרק שדות מסויימים שמוצגים?
        args=args.toLowerCase();
        for (let key in p) {
            if (typeof (p[key]) == "string" && p[key].toLowerCase().indexOf(args) != -1)
                return true;
            if (typeof (p[key]) == "number" && p[key].toString().toLowerCase().indexOf(args) != -1) return true;
        }
        return false;
    }
    const filterProduct = async (args) => {//שלא יהיה אחד על השני
        let pr = await getData(props.url);
        pr = pr.filter(p => forFilter(p, args))
        setData1(pr);
    }


    const itemTemplate = (product) => {
      
        return (< >

         <OneData  relative={props.url} img={product.image} name={product.name} address={product.address} segula={product.segula} >

           </OneData>
            </>
        );

  
    };

    return (
        <div  >
            

                <div class="flex justify-content-center flex-wrap card-container ">

                    <div class="flex align-items-center justify-content-center">
                        <span className="p-input-icon-left">
                            <i className="pi pi-search" id='icon' />
                            <InputText placeholder="Search" onInput={(e) => filterProduct(e.target.value)} id='search' />
                        </span>
                    </div>

                </div>

            

            <div className='card flex justify-content-center' id='data'>

                <DataView value={data1} itemTemplate={itemTemplate} filter filterBy="name" />
            </div>
        </div>
    )
}

export default Data;

