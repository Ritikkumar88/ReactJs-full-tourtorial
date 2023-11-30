// import { createContext, useContext } from "react";

// export const ThemeContext = createContext({
//     themeMode: "light",
//     darkTheme: () => {},
//     lightTheme: () => {},
// })

// export const ThemeProvider = ThemeContext.Provider

// export default function useTheme(){
//     return useContext(ThemeContext)
// }


// *********Practice************

// ******step-1 :: import context and create context**************
import { createContext, useContext } from "react";

export const ThemeContext = createContext(
    // jab bhi koi context call karega "ThemeContect()" usko theme bhi mil jaaefga or 2 function bhi mil jaaenge//
    {
        // step-2 :: *****give the parameters as object, which you want in your component ;
        themeMode: "",
        darkTheme: () => { },
        lightTheme: () => { },
    }
)

// **step-3 : export context provider
export const ThemeProvider = ThemeContext.Provider

// step-4 ****export a custom hook;
export default function useTheme() {
    // step-5 ***return the useContext as a parameter of your context;
    return useContext(ThemeContext)

}