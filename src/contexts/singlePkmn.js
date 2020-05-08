import React, { createContext, useState } from "react"

export const PkmnContext = createContext()

const PokemonContextProvider = ({ children }) => {
  const [state, setState] = useState({})
  return (
    <PkmnContext.Provider value={[state, setState]}>
      {children}
    </PkmnContext.Provider>
  )
}

export default PokemonContextProvider
