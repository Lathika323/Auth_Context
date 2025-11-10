import React, { Children, createContext, useContext, useState } from 'react'

// createContext() : Pre-defined JS function is used to create a 'box' to hold data
// AuthContext is user defined variable that stores in box
const AuthContext=createContext();

//AuthProvider : Person who fills the box and let others to use
export function AuthProvider({children}){
    const[user,setUser]=useState(null);     //when initially nobody logged in  so null

    //login(name) put user's name inside the box
    const login =(name)=> setUser(name);

    //logout clears the user's name from the box
    const logout = ()=> setUser(null);

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
  );
}

export function useAuth(){
        return useContext(AuthContext);    
        //useContext() is pre-defined JS function to use the created context
}

  

