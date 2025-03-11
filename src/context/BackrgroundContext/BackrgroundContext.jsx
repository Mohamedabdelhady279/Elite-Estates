import { createContext, useState } from "react";


export const BackgroundContext = createContext('');
export default function BackgroundProvider({children}){
    const [backgroundColor , setBackgroundColor] = useState('bg-[#0055CD33]');


    return(
        <>
        <BackgroundContext.Provider value={{backgroundColor ,setBackgroundColor}}>
             {children}
        </BackgroundContext.Provider>
        </>
    )
}