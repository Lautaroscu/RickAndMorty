import { fetchInfo } from "../services/fetchInfo"
import { useState } from "react";
export   function UseInfo() {
    const [info , setInfo] = useState({})
    const getInfo = async () => {
        const data = await fetchInfo() ;
        setInfo(data)
    }  

    return {info , getInfo }
}