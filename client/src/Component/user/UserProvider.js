import React, { useState, useEffect } from "react";
import UserContext from './UserContext';
import { getData } from '../../Hooks/useAxios'



const UserProvider = ({ children, userId }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        if (userId) {
           
                setUser(user)
                localStorage.setItem("user", JSON.stringify(user))
        }
    }, [userId]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
export default UserProvider;