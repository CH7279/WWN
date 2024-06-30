
// import React, { useState, useRef, useEffect } from "react";
// import { Camera } from "react-camera-pro";
// import { useNavigate } from "react-router-dom";
// import 'primeicons/primeicons.css';
// const Camera1 = () => {
//     const camera = useRef(null);
//     const [image, setImage] = useState(null);



//     useEffect(() => {

//         setTimeout(() => {

//             navigate("/visitor/presentLocation")
//         }, 2000);
//     }
//     )


//     const navigate = useNavigate();

//     return (
//         <p >
//             {!image ? <><Camera ref={camera} aspectRatio={8 / 5} />
//                 <br /><input type="submit" name="go" id="go" value="take a picture"
//                     onClick={() => { setImage(camera.current.takePhoto()) }} /> </> : <>
//                 <img src={image} style={{ "width": "70%" }} />
//                 <input type="submit" name="go" id="go" value="Ok" icon="pi pi-check" onClick={() => navigate("/visitor/presentLocation")} />
//                 <br /><br />
//                 <input type="submit" name="go" id="go" value="Canceling and reshooting" icon="pi pi-times" onClick={() => {
//                     setImage("")
//                 }} /></>}
//         </p>);
// }

// export default Camera1;



