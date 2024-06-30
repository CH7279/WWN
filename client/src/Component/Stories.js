import Head from './Head';
import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import { InputText } from "primereact/inputtext";
import './css/Data.css'
import { getData, postData } from '../Hooks/useAxios'
import { Link } from "react-router-dom";
import { CgMathPlus } from "react-icons/cg";

const OneData = (props) => {
return <>
      <div id='one'>
        <div id="img">
          {/* <img  image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"></img> */}
        </div>
        <div id="name">{props.title}</div>
          <div id="add">{props.place}</div>
          <div id="sg">{props.name}</div>
          <Link to={ `/story/${props.id}`} id="link" >
            More info
          </Link>
        </div>
        </>
}


const Stories=() =>{
    const [data1, setData1] = useState([]);

    const get = async (url) => {
        const myData = await getData(url);
        setData1(myData)
    }

    useEffect(() => {
        get("stories/")
       
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
    const filterProduct = async (args) => {
        let pr = await getData("stories/");
        pr = pr.filter(p => forFilter(p, args))
        setData1(pr);
    }


    const itemTemplate = (product) => {
      
        return (
         <OneData  id={product.id}  img={product.image} name={product.name} place={product.place} title={product.title}  > </OneData>
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

                {/* <input type="submit" name="go" id="go" value={`W${"\n"}a${"\n"}n${"\n"}t${"\n"} ${"\n"}t${"\n"}o${"\n"} ${"\n"}t${"\n"}e${"\n"}l${"\n"}l${"\n"} ${"\n"}u${"\n"}s${"\n"}?`} style={{position: "fixed",bottom:100,left: 0,width:"1%",textAlign:"left"}} onClick={() => { }} /> */}

            <div className='card flex justify-content-center' id='data'>

                <DataView value={data1} itemTemplate={itemTemplate} filter filterBy="name" />
            </div>
        </div>
    )
}

export default Stories;