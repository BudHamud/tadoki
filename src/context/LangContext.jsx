import { createContext, useContext, useState } from "react";

export const LangContext = createContext()

const LangContextProvider = ({ children }) => {
    const [contextLang, setContextLang] = useState('EN')
    const values = { contextLang, setContextLang }
    
    return (
        <LangContext.Provider value={values}>
            {children}
        </LangContext.Provider>
    )
}

export const useLangContext = () => {
    const context = useContext(LangContext)
    return context
}

export default LangContextProvider;
