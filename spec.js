import { useState } from "react";

export function useAvengerHooks(){
    const[count,setCount]=useState(10)
    
    const inc=()=>{
         setCount(count+10)
    }

    const dec=()=>{
        setCount(count-10)
    }

    const res=()=>{
        setCount(10)
    }
    return{count , inc,dec,res}
}