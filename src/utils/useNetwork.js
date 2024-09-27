import {useState} from 'react'

export const useNetwork = ()=> {

const[network, setNetwork]  = useState(true);

window.addEventListener("offline", ()=>{
    setNetwork(false);
}) 

window.addEventListener("online", ()=>{
    setNetwork(true);
}) 

  return network;
}

 