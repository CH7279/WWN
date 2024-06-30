// import { ProductService } from './productsForData/product';
import React from 'react';
import { InputText } from "primereact/inputtext";
// import './css/Data.css'


// const Search=(props)=>{

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
//     }, []);

//     const getSeverity = (product) => {
//         switch (product.inventoryStatus) {
//             case 'INSTOCK':
//                 return 'success';

//             case 'LOWSTOCK':
//                 return 'warning';

//             case 'OUTOFSTOCK':
//                 return 'danger';

//             default:
//                 return null;
//         }
//     };


//     const forFilter = (p, args) => {
//         for (let key in p) {
//             if (typeof (p[key]) == "string" && p[key].indexOf(args) != -1)
//                 return true;
//             if (typeof (p[key]) == "number" && p[key].toString().indexOf(args) != -1) return true;
//         }
//         return false;
//     }
//     const filterProduct = async (args) => {
//         let pr = await ProductService.getProducts()

//         pr = pr.filter(p => forFilter(p, args))
//         console.log(pr);
//         setProducts(pr);
//     }


//     return(
//     <div class="flex justify-content-center flex-wrap card-container">


//     <div class="flex align-items-center justify-content-center">
//         <div className='propil' style={{ "borderRadius": "90px", "borderColor": "black", "border": "solid", "borderWidth": "1px" }}>
//             <i className="pi pi-user" style={{ fontSize: '1.5rem' }} />
//         </div>
//     </div>



//     <div class="flex align-items-center justify-content-center">
//         <span className="p-input-icon-left">
//             <i className="pi pi-search" id='icon' />
//             <InputText placeholder="Search" onInput={(e) => filterProduct(e.target.value)} id='search' />
//         </span>
//     </div>

//     </div>)

// }

// export default Search

const Search = ({ filterProduct }) => {
    return (
        <div class="flex justify-content-center flex-wrap card-container ">
            <div class="flex align-items-center justify-content-center">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" id='icon' style={{left:"74%"}}/>
                    <InputText placeholder="Search" onInput={(e) => filterProduct(e.target.value)} id='search' />
                </span>
            </div>
        </div>
    )
}

export default Search
