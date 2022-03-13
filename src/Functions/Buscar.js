import { useState } from "react";

import Data from "../Data/data";

function InputFilter(){


    const [result,SetResult] = useState([]);
    const [data] = Data();

    function Buscar(values){

    let maches = []
    if(values.length > 0){
    maches = data.filter((item)=>{
    const regex = new RegExp(`${values}`,"gi");
    return item.titulo.match(regex);
    });
    SetResult(maches)
    }else{
    SetResult([])
    }}


    return [result,Buscar]


}


export default InputFilter;


