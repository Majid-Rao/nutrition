import React, { createContext,useContext, useEffect ,useState} from 'react'
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export const AuthProvider = ({ children}) => {
 const [token, setToken] = useState(null);
 const [UserData, setUserData] = useState(null);
 const [isAuthenticated, setIsAuthenticated] = useState(false);


 const storedData = JSON.parse(localStorage.getItem('user_data'));
 let navigate = useNavigate();
 useEffect(()=>{
if(storedData){
    const {userToken, user} = storedData;
    setToken(userToken);
    setUserData(user);
    setIsAuthenticated(true);
   

}
 },[]);
 const login = (newToken, newData)=>{
    localStorage.setItem("user_data", JSON.stringify({userToken: newToken, user: newData, uid: newData._id}),
);
    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);
    
 };



 const logout =()=>{
    localStorage.removeItem('user_data')
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
 }
    return (
    <AuthContext.Provider  value={{
      token,
      isAuthenticated,
      login,
      logout,
      UserData,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth =()=> useContext(AuthContext);
