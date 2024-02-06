import { useContext, useEffect } from "react";
import {  createContext, useReducer } from "react";
import {reduser} from "./reduser";

 export const initialState ={
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [] ,
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
}

export const GlobalContext = createContext(initialState);


export default function ContextProvider ({children}) 
{
    const [state , dispatch] = useReducer(reduser, initialState);
    useEffect(()=> {
        localStorage.setItem("watchlist" , JSON.stringify(state.watchlist))
        localStorage.setItem("watched" , JSON.stringify(state.watched))
    }, [state]);
    // console.log(state);

    return <>
    <GlobalContext.Provider 
    value={{ 
    watchlist:state.watchlist,
    watched:state.watched,
    moviesDispatch:dispatch,
    }}>
        {children}
    </GlobalContext.Provider>
    </>
}


export const useMoviesContext = ()=> {
    return useContext(GlobalContext)
};