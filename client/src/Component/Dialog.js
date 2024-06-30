import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, postData } from '../Hooks/useAxios'
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import '../Component/css/MainButtons.css';
import UserContext from './user/UserContext';
import Complit from './AutoComplete';


function FormDialog(props) {
  const [name, setName] = useState('');
  const [request, setrequest] = useState('');
  const [dates, setDates] = useState([]);
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const { user } = useContext(UserContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setrequest(e.target.value);
  };

  const handleDatesChange = (e) => {
    setDates(e.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handlePlaceChange = (e) => {
    console.log(e);
    setPlace(e);
  };

  const handleSubmit = (e) => {



    if (!request || !name || !dates || !place) {
      setErrorMessage('All fields are required except time');
      return;
    }
    console.log(place);

    e.preventDefault();
    console.log(dates[0]);
    console.log(dates[1]);


    // Check if the selected date and time is in the past
    const selectedDateTime = new Date(dates[0]);
    let selectedDateTime1 = new Date(dates[0]);
    if (dates.length > 1) {
      selectedDateTime1 = dates[1];
    }
    const h = time.split(':')[0];
    const m = time.split(':')[1];
    selectedDateTime.setHours(h);
    selectedDateTime.setMinutes(m);

    console.log(selectedDateTime);
    console.log(selectedDateTime1);

    if (selectedDateTime.getTime() < Date.now()) {
      setErrorMessage('Selected date and time is in the past.');
      return;
    }

    const obj = {
      start: selectedDateTime,
      end: selectedDateTime1
    };
    var p;
    postData('period/', obj).then((msg) => {
      console.log(msg);
      p = msg[1].id;
      if (msg[0] === 'add Period') {

        console.log(p);

      }

    }).
      then(() => {
        const data = {
          name_to_prayer: name,
          request: request,
          is_done: 0,
          is_catch: 0,
          id_period: p,
          idUser: user.id,
          nameUser: user.name,
          phonUser: user.phone,
          emailUser: user.email,
          id_place: place.id
        }
        console.log("data", data);
        postData('requests/', data).then((msg) => {
          if (msg === 'add Request') {
            console.log(msg);
          }

        })
      }).
      catch((err) => {
        console.log(err);
      })

    // Here you can send the form data to the server using Axios or fetch.

    // After sending the data, you can close the dialog and clear the form fields
    props.handleClose();
    setName('');
    setrequest('');
    setDates([]);
    setTime('');
    setErrorMessage('');

  };

  const handleHide = () => {
    // When the dialog is hidden, clear the error message and form fields
    props.handleClose();
    setName('');
    setrequest('');
    setDates([]);
    setTime('');
    setErrorMessage('');


  }

  const dialogFooter = (
    <div>
      <Button onClick={handleSubmit} id="bs"><div id="send">send</div></Button>
    </div>
  );

  return (
    <>
      <Dialog visible={props.isOpen} onHide={handleHide} header="send a prayer" footer={dialogFooter} id='di' >
        <label id='l'>
          Name to prayer:
          <input type="text" value={name} onChange={handleNameChange} id="input1" />
        </label>
        <br />
        <label id='l'>
          request:

          <InputTextarea style={
            {
              height: "100%", width: "100%", padding: "8px 5px",
              background: "linear-gradient(#FFF3E4, #FFFFFF)",
              border: "1px solid #222",
              boxShadow: "0 1px 0 rgba(255,255,255,0.1)",
              borderRadius: "0.3em",
              marginBottom: "20px"
            }
          } type="text" value={request} onChange={handleEmailChange} id="input2" />
        </label>
        {/* <label id='l'>
          Where:
          <input type="text" value={name} onChange={handleNameChange} id="input1" />
        </label> */}
        <br />
        <label id='l'>
          Dates:
          <Calendar style={
            {
              background: "linear-gradient(#FFF3E4, #FFFFFF)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.1)",
              marginBottom: "20px"
            }
          } value={dates} onChange={handleDatesChange} selectionMode="range" dateFormat="dd/mm/yy" id="input3" />
        </label>
        <br />
        <label id='l'>
          Time:
          <input type="time" value={time} onChange={handleTimeChange} id="input4" />
        </label>
        <br />
        <label id='l'>
          Where:
          <Complit onChange={handlePlaceChange}></Complit>
        </label>
        <br />
        <br />
        {errorMessage && <div className="p-error">{errorMessage}</div>}
      </Dialog></>

  );
}

export default FormDialog;