import { createContext } from "react";

export const languageContext = createContext({
    language:"en",
    setLangContext:()=>{}
})

export const languageProvider = languageContext.Provider