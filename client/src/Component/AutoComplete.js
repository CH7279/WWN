import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { getData, postData } from '../Hooks/useAxios'


export default function Complit(props) {
    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);

    const search = (event) => {
        let query = event.query.toLowerCase();
        let _filteredData = [];

        for (let i = 0; i < data.length; i++) {
            const place = data[i];
            if (place.name.toString().toLowerCase().indexOf(query) === 0) {
                _filteredData.push(place);
            }
        }
        setFilteredData(_filteredData);
    }

    const get = async (url) => {
        const myData = await getData(url);
        setData(myData)
        console.log(data);
    }

    useEffect(() => {
        get("places/")

    }, [])

    return (
        <div className="card flex justify-content-center">
            <AutoComplete style={
              {background:"linear-gradient(#FFF3E4, #FFFFFF)",
              boxShadow:"0 1px 0 rgba(255,255,255,0.1)",
              marginBottom:"20px",
              width:"100%"
            }
  } field="name" value={selectedData} suggestions={filteredData} completeMethod={search} onChange={(e) =>{setSelectedData(e.value); props.onChange(e.value)} } />
        </div>
    )
}
      