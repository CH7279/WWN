import React, { useState, useContext } from "react";
import './css/MainButtons.css'
import { useNavigate } from 'react-router-dom';
import { BsInfoCircle,BsBook } from "react-icons/bs";
import { MdOutlineAddTask } from "react-icons/md";
import { CgMathPlus } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import FormDialog from './Dialog';
import UserContext from './user/UserContext';





function MainButtons() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    // const [position, setPosition] = useState('center');
    const [isOpen, setIsOpen] = useState(false);
  const { user} = useContext(UserContext);

   

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
    const footerContent = (
        <div>
            <button onClick={() => setVisible(false)}  id="bs"><div id="send">send</div></button>
           <input type='text' id="input1"></input>
           <input type='text' id="input2"></input>
           <input type='text' id="input3"></input>
           <input type='text' id="input4"></input>
        </div>
    );

    // const show = (position) => {
    //     setPosition(position);
    //     setVisible(true);
    // };

    return (
        <div>
        <div className="under">
            <div>

               
                <button className="btn" id='B1' onClick={() => { navigate('/') }}><BsInfoCircle id='home'/>
                <div className="text1">About</div></button>
                <button className="btn" id='B2' onClick={() => {
                   if(!user.id)
                   {
                      navigate(`/Login`);
                    }
                   else
                   navigate('/MyPrayers') }}><BsBook id='book'/>
                <div className="text2">Prayers</div></button>
                <button className="btn" id='B3' onClick={() =>{
                   if(!user.id)
                   {
                      navigate(`/Login`);
                    }
                   else
                  handleOpen()} }><CgMathPlus id='plus'/>
                <div className="text3">Request</div></button>
                <button className="btn" id='B4' onClick={() => {  
                   if(!user.id)
                   {
                      navigate(`/Login`);
                    }
                    else{
                   if(!user.is_active)
                   {
                    //loginprayer
                      navigate('/SignupMassenger');
                    }
                   else
                    navigate('/Missions')
                  }
                  }}><MdOutlineAddTask id='table'/>
                <div className="text4">Missions</div></button>
                <button className="btn" id='B5' onClick={() => { navigate('/Stories') }}><FaRegComments id='comment'/>
                <div className="text5">Stories</div></button>
            </div>
        </div>
        {/* {!user.id ? ( <Login />):( */}
        <FormDialog isOpen={isOpen} handleClose={handleClose} />
        {/* )} */}
</div>
    )
}
export default MainButtons;


