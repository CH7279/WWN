import Head from './Head';
import React, { useState, useEffect , useContext } from 'react';
import { DataView } from 'primereact/dataview';
import './css/Data.css'
import { getData, postData,putData } from '../Hooks/useAxios'
import Search from './Search';
import UserContext from './user/UserContext';

const OneData = (props) => {
    const {user} = useContext(UserContext);
  
const cacth=async()=>{

const obj = await getData(`requests/id/${props.id}`);
obj.is_catch=1;
putData(`requests/id/${props.id}`,obj).then((msg)=>{
    console.log(msg);
    if(msg==='Request was updated successfully')
    {
        console.log(msg);
    } 
}).
catch((err)=>{
        console.log(err);
})
console.log(obj);


const data={
    id_messenger:user.id,
    id_place:obj.id_place,
    id_request:obj.id
}

postData(`messengers_in_places/`,data).then((msg)=>{
    console.log("11"+msg);
    if(msg==='add Messengers_In_Places')
    {
        console.log(msg);
    } 
}).
catch((err)=>{
        console.log(err);
})

 }

return <>
   
      <div id='one' style={{ height: "70px"}}>
        <div style={{margin:"2%" }}>{props.nameUser}</div>
        <div style={{margin:"2%" }}>{props.Stime}</div>
        <div style={{margin:"2%" }}>{props.Etime}</div>
        <div style={{margin:"2%"}}>{props.place}</div>
        <button style={{ 
            bottom:" 4%",
            height: "30%",
            width:"40%",
            background: "#FFF3E4",
            boxshadow: "0px 4px 25px rgba(192, 192, 192, 0.3)",
            borderRadius: "11.3663px",
            borderStyle: "none",
            bottom: "15px" , 
            display:"inline",
            right:"25%",
            position: "relative",
            fontFamily: 'Poppins',
            fontStyle: "normal",
            fontSize: "14px",
            color: "#752D28",
    }}  onClick={()=>{cacth();
    console.log(props.func);
    props.func();}} > Receive the mission</button>
      </div>
    </>

}


const Missions=() =>{
    const [data1, setData1] = useState([]);

    const get = async (url) => {
        const myData = await getData(url);
        setData1(myData)
        console.log("myData");
        console.log(data1);
    }

    useEffect(() => {
        get("requests/cacth/")
       
    }, [])
   
    const forFilter = (p, args) => {
        console.log(p);
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
        let pr = await getData("requests/cacth/");
        pr = pr.filter(p => forFilter(p, args))
        setData1(pr);
    }


    const itemTemplate = (product) => {
      
        return (
         <OneData  func={()=>{get("requests/cacth/")}} Stime={product["Period.start"]} Etime={product["Period.end"]} place={product["Place.name"]} nameUser={product.nameUser} id={product.id}> </OneData>
        );

  
    };

    return (
        <div className='fo'>
            

            <Search filterProduct={filterProduct} />

            <div className='card flex justify-content-center' id='data'>

                <DataView value={data1} itemTemplate={itemTemplate} filter filterBy="name" />
                <div style={{ "height": "76px"}}></div>

            </div>
        </div>
    )
}

export default Missions;

