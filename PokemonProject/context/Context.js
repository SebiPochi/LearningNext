import React, { useContext, createContext, useState, useMemo, useEffect } from 'react';

//Context
export const AppContext = createContext({pokemon: ""});

//Provider
export const AppContextProvider = ({ children }) => {
  const [inputPokemon, setInputPokemon] = useState(false);

  //ComponentDidMouunt

  //
  const values = useMemo(() => (
    { 
        inputPokemon,      // States que seran visibles en el contexto.
        setInputPokemon,   // Funciones que son exportadas para manejo externo.
    }), 
    [ 
        inputPokemon ]);   // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export function useAppContext() {
  const context = useContext(AppContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;