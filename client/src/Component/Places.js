import Head from './Head';
import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import { InputText } from "primereact/inputtext";
import './css/Data.css'
import { getData, postData } from '../Hooks/useAxios'
import { Link } from "react-router-dom";
import Search from './Search';

const OneData = (props) => {
    return <>
        <div id='one'>
            <div id="img">
                {/* <img  image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"></img> */}
            </div>
            <div id="name">{props.name}</div>
            <div id="add">{props.address}</div>
            <div id="sg">{props.segula}</div>

            <Link to={`/Place/${props.id}`} id="link"  >
                More info
            </Link>
        </div>
    </>

}

const Places = () => {
    const [data1, setData1] = useState([]);

    const get = async (url) => {
        const myData = await getData(url);
        setData1(myData)
    }

    useEffect(() => {
        get("places/")

    }, [])


    const forFilter = (p, args) => {
        console.log(p);
        //איך לעשות שרק שדות מסויימים שמוצגים?
        args = args.toLowerCase();
        for (let key in p) {
            if (typeof (p[key]) == "string" && p[key].toLowerCase().indexOf(args) != -1)
                return true;
            if (typeof (p[key]) == "number" && p[key].toString().toLowerCase().indexOf(args) != -1) return true;
        }
        return false;
    }
    const filterProduct = async (args) => {
        let pr = await getData("places/");
        pr = pr.filter(p => forFilter(p, args))
        setData1(pr);
    }


    const itemTemplate = (product) => {

        return (
            <OneData img={product.image} name={product.name} address={product.address} segula={product.segula} id={product.id}> </OneData>
        );


    };

    return (
        <div className='fo'>
            <Search filterProduct={filterProduct} />
            <div className='card flex justify-content-center' id='data'>

                <DataView value={data1} itemTemplate={itemTemplate} filter filterBy="name" />
                <div style={{ "height": "76px" }}></div>

            </div>
        </div>
    )
}

export default Places;
