import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import UserProvider from './Component/user/UserProvider';
//components  
import Home from './Component/Home';
import Login from './Component/Login';
import MainButtons from './Component/MainButtons'

import Places from './Component/Places';
import MyPrayers from './Component/MyPrayers';
import Place from './Component/Place';
import Stories from './Component/Stories';
import Story from './Component/Story';
import Signup from './Component/Signup';
import Missions from './Component/Missions';
import Mission from './Component/Mission';
import Head from './Component/Head';
import AddPlace from './Component/AddPlace';
import AddStory from './Component/AddStory';
import Notes from './Component/Notes';
import SendEmail from './Component/SendEmail';
import SignupMassenger from './Component/SignupMassenger';
import UserSetting from './Component/UserSetting';
import My from './Component/My';
import Other from './Component/Other';




function App() {
  const [userId, setUserId] = useState('');
  // const setUserIdCallback = (id) => {
  //   setUserId(id);
  // }

  // useEffect(()=>{
  //   //check token
  //   const userFromLocalStorage = localStorage.getItem("user")
  //   if (!userFromLocalStorage) return;
  //   const parsedUser = JSON.parse(userFromLocalStorage)
  //   setUserId(parsedUser.user_id)
 
  // },[])




  return (
    <UserProvider >

      <div className="App">
        <Head />
        <MainButtons />
        <div className="App">
          <Routes>
            <Route exact path='/' element={< Home/>}></Route>
            <Route exact path='/Signup' element={< Signup />}></Route>
            <Route exact path='/SignupMassenger' element={< SignupMassenger/>}></Route>
            <Route exact path='/AddPlace' element={< AddPlace/>}></Route>
            <Route exact path='/AddStory' element={< AddStory/>}></Route>
            <Route exact path='/Notes' element={< Notes/>}></Route>
            <Route exact path='/Login' element={< Login />}></Route>
            <Route exact path='/Places' element={<Places />}></Route>
            <Route exact path='/Missions' element={<Missions />}></Route>
            <Route exact path='/Mission/:id' element={<Mission />}></Route>
            <Route exact path='/MyPrayers' element={<MyPrayers />}></Route>
            <Route exact path='/Place/:id' element={<Place />}></Route>
            <Route exact path='/My/:id' element={<My/>}></Route>
            <Route exact path='/Other/:id' element={<Other/>}></Route>
            <Route exact path='/Stories' element={<Stories />}></Route>
            <Route exact path='/Story/:id' element={<Story />}></Route>
            <Route exact path='/SendEmail' element={<SendEmail/>}></Route>
            <Route exact path='/UserSetting' element={<UserSetting/>}></Route>
          </Routes>

        </div>

      </div>
    </UserProvider>

  );
}

export default App;
