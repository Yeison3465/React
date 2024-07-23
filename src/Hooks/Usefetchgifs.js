import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs";


export const Usefetchgifs = (category) => {
    const [imagen, setimagen] = useState([]);
    const [isLoading, setisLoding] = useState(true);

    const Getimagen = async()=>{
        const newImagen = await getGifs(category)
        setimagen(newImagen)
        setisLoding(false);

    }

    useEffect(() =>{
        Getimagen()
    },[])
    
    
    
    return{
        imagen,
        isLoading: true
    }

}


