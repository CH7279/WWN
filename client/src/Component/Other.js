import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { getData, postData } from '../Hooks/useAxios'
import {BsArrowCounterclockwise} from "react-icons/bs";


const steps = [
  {
    label: 'First step - Request',
    description:`In the first step, your request was sent to the system
                for coordination between you and a messenger who will
                pray for you at the place and time you requested, 
                the coordination is done by checking the location of
                the prayer and sending a message to the appropriate
                messengers.`,
  },
  {
    label: 'Second step - Courier coordination',
    description:
      `At this point we will let you know when your prayer 
        has been caught by a messenger that we have in the system,
        the messenger will pray for you at the time and place you
        requested.`,
  },
  {
    label: 'Last step - Done',
    description: `And the last step - the messenger is supposed to upload 
                 here a picture of the place of prayer, the system checks
                  that it is indeed the place where the mission is supposed 
                  to be carried out, and you will know that your prayer has 
                  risen to the heights, and we all hope that it will be fulfilled
                   soon for good and blessings.`,
  },
];

export default function Other() {
    const [activeStep, setActiveStep] = useState(0);
    const [data, setData] = useState([]);
    const [place, setPlace] = useState([]);
    const [mesInP, setmesInP] = useState([]);
    const [mes, setMes] = useState([]);
    const params=useParams()
  
      const get = async () => {
          const myData = await getData(`requests/id/${params.id}`);
          setData(myData)
          console.log(myData);
          console.log(myData.id_place);
          const myData1 = await getData(`places/${myData.id_place}`);
          setPlace(myData1)
          console.log(myData1);
          const myData2 = await getData(`messengers_in_places/idRequest/${myData.id}`);
          setmesInP(myData2)
          console.log(myData2.id_messenger);
          const myData3 = await getData(`messengers/id/${myData2.id_messenger}`);
          setMes(myData3)
          console.log(myData3);
      }
  
      useEffect(() => {
          get()
         
      }, [])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (<>
    <div style={{ "height": "171px"}}></div>
    <h1 id='h1'>Here you can track your prayer</h1>
    <div class="inset"></div>
    <Box sx={{ maxWidth: 400 }} style={{marginLeft:"20px"}}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step, index) => (
          <Step  key={step.label}>
            <StepLabel  
              optional={
                index === 2 ? (<></>
                ) : null
              } >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography style={{color:"black",textAlign:"left",margin:"2px"}}>{step.description}</Typography>
              <Box sx={{ mb: 2 ,fontSize:15}}>
                <div>
                  <Button style={{
                                padding:"5px 20px",
                                border:"1px solid rgba(0,0,0,0.4)",
                                textShadow:"0 -1px 0 rgba(0,0,0,0.4)",
                                boxShadow:
                                "inset 0 1px 0 rgba(255,255,255,0.3)",
                                borderRadius:"0.3em",
                                background:"#000000",
                                color:"white",
                                fontWeight:"bold",
                                cursor:"pointer",
                                fontSize:"13px"
                            }}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}>
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  {index ===0?(<></>):( <Button style={{
                                padding:"5px 20px",
                                border:"1px solid rgba(0,0,0,0.4)",
                                textShadow:"0 -1px 0 rgba(0,0,0,0.4)",
                                boxShadow:
                                "inset 0 1px 0 rgba(255,255,255,0.3)",
                                borderRadius:"0.3em",
                                background:"#000000",
                                color:"white",
                                fontWeight:"bold",
                                cursor:"pointer",
                                fontSize:"13px"
                            }}
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>)}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {data.is_done ? (<Typography >All steps completed - you&apos;re finished</Typography>):(<></>)}
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
           <Button style={{
                                padding:"5px 20px",
                                border:"1px solid rgba(0,0,0,0.4)",
                                textShadow:"0 -1px 0 rgba(0,0,0,0.4)",
                                boxShadow:
                                "inset 0 1px 0 rgba(255,255,255,0.3)",
                                borderRadius:"0.3em",
                                background:"#000000",
                                color:"white",
                                fontWeight:"bold",
                                cursor:"pointer",
                                fontSize:"13px"
                            }} onClick={handleReset} sx={{ mt: 1, mr: 1 ,fontSize:15}}>
           <BsArrowCounterclockwise/>
          </Button>
        </Paper>
      )}
    </Box>
    <div style={{ "height": "76px" }}></div>
    </>
  );
}