
import React, { useEffect, useState } from "react";

import styled from "styled-components";


const Container = styled.div`

  position: relative;

  width: 200px;

  height: 200px;

   border-radius: 50%;

  overflow: hidden;

  background-color: #EED6C4;

  margin-top:50%;

  margin-left:22%;

`;


const Image = styled.img`

  position: relative;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

`;


const Input = styled.input`

  display: none;

`;


const Button = styled.button`

  position: relative;

  bottom: 0;

  transform: translateX(-50%);

  padding:5px 20px;

  border:1px solid rgba(0,0,0,0.4);

  text-shadow:0 -1px 0 rgba(0,0,0,0.4);

  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.3),
    inset 0 10px 10px rgba(255,255,255,0.1);
    
  border-radius:0.3em;

  background:#000000;

  color:white;

  float:right;

  font-weight:bold;

  cursor:pointer;

  font-size:13px;

  z-index:2;
  
  right:25%;
 
  margin-top:1%;

`;


export const ImageSelect = ({ imageUrl, setImageUrl }) => {



  const handleFileChange = (event) => {

    const file = event.target.files[0];

    const reader = new FileReader();


    reader.onload = (e) => {

      setImageUrl(e.target.result);

    };


    reader.readAsDataURL(file);

  };


  const handleImageDelete = () => {

    setImageUrl("");


  };

  useEffect(() => { console.log({ imageUrl }); }, [imageUrl])

  console.log(imageUrl);
  return (<>

    <Container>

      {imageUrl ? <Image src={"data:image/jpeg;base64,"+imageUrl} /> : null}

      <Input

        type="file"

        onChange={handleFileChange}

        accept="image/png,image/jpeg,image/gif"

      />



    </Container>
    {imageUrl ? (

      <Button onClick={handleImageDelete}>Delete</Button>

    ) : (
      <>
        <Button onClick={() => document.querySelector('input[type="file"]').click()}>Select</Button>
        {console.log("aaaaaaaaaaaaaa" + imageUrl)}
      </>
    )}
  </>
  );

};
