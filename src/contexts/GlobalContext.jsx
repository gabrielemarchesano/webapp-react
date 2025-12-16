import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }){
  const [ loader, setLoader ] = useState();

  return(
    <GlobalContext.Provider
      value={{
        loader,
        setLoader
      }}
      >
        {children}
      </GlobalContext.Provider>
  )
}

function useGlobal(){
  const context = useContext(GlobalContext);
  return context;
}

export {GlobalProvider, useGlobal}