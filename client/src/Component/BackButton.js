import React from 'react';
// import { ImArrowLeft2 } from "react-icons/im";
import { HiArrowSmallLeft } from "react-icons/hi2";
        
const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (<>
  
  <HiArrowSmallLeft style={{position:"fixed", fontSize:"25px",color:"black",left:"1%",top:"175px",zIndex:10}} onClick={handleBack}/>

</>  );
};

export default BackButton;
