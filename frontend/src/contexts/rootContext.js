import { createContext } from "react";

const rootContext = createContext({
        user:null,
        setUser : ()=>{}
});


export {  rootContext };