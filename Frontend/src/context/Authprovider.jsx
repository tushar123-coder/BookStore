import React, {  createContext, useContext, useState } from 'react'

export const Authcontext=createContext();


export default function Authprovider({children}) {
  const initialAuthUser=localStorage.getItem("Users");
  let parsedAuthUser;
  try {
    parsedAuthUser = initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
  } catch (error) {
    console.error('Failed to parse auth user from localStorage', error);
    parsedAuthUser = undefined;
  }

  const [authUser, setAuthUser] = useState(parsedAuthUser);
  return(
    <Authcontext.Provider value={[authUser,setAuthUser]}>
        {children}
    </Authcontext.Provider>
  )

}

export const useAuth=()=>useContext(Authcontext)
