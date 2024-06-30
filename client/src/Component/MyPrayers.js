import Head from './Head';
import React, { useState, useEffect, useContext } from 'react';
import { DataView } from 'primereact/dataview';
import { InputText } from "primereact/inputtext";
import './css/Data.css'
import { getData, postData } from '../Hooks/useAxios'
import { Link } from "react-router-dom";
import Search from './Search';
import UserContext from './user/UserContext';




const OneData = (props) => {
    return <>
 
        <div id='one'>
        
             <div >your prayer</div>
            <div >in {props.id_place}</div>
           <div >at time {props.id_period}</div>

            <Link to={`/My/${props.id}`}>
                More info
            </Link>
        </div>
    </>

}


const OneData1 = (props) => {
    return <>
        <div id='one'>
             <div>your Mission</div>
            <div>in {props.id_place}</div>
           <div>at time {props.id_period}</div>

        <Link to={`/Other/${props.id}`}>
                More info
            </Link>
        </div>
    </>

}

//איך לעשות יחודי?
const MyPrayers = () => {
    const {user} = useContext(UserContext);

    const [data1, setData1] = useState([]);

    const get = async () => {
        const myData = await getData(`messengers_in_places/getRequestsOfMessengers/${user.id}`);
        const myData1 = await getData(`requests/idUser/${user.id}`);
        const _myData=[...myData1,...myData]
        setData1(_myData)
    }
    // 
    useEffect(() => {
        get()

    }, [])
    

    const forFilter = (p, args) => {
      
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
        let pr = await getData(`messengers_in_places/getRequestsOfMessengers/${user.id}`);
        pr = pr.filter(p => forFilter(p, args))
        setData1(pr);
    }


    const itemTemplate = (product) => {
    console.log(product);
    console.log(product.idUser);
    console.log(user.id);

        return<>
        {(product.idUser===user.id)==true?(<OneData id={product.id} id_place={product.id_place} id_period={product.id_period}> </OneData>):(<OneData1 id={product.id} id_place={product.id_place} id_period={product.id_period} idUser={product.idUser}> </OneData1>)}{/* לשנות לעריכה */}
        
        </>;
 
    }
   
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
export default MyPrayers;