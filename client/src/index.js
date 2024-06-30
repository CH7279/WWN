import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import Login from './Component/Login';
import Story from './Component/Story';
import Place from './Component/Place';
import UserSetting from './Component/UserSetting';
import Complit from './Component/AutoComplete';
import Camera1 from './Component/Camera';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router> 
         {/* <Place/> */}
        {/* <Login></Login> */}
    <App />
    <div style={{ "height": "99px" }}></div>
    {/* <Camera1></Camera1> */}
    {/* <UserSetting></UserSetting> */}
  {/* <Contact></Contact> */}
    {/* <Story></Story> */}
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// navigate("/login?redirect=  const currentPath = useCurrentPath() // `/members/5566` -> `/members/:id`)
