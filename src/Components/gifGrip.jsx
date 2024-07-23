import React, { useEffect, useState } from 'react'
import { getGifs } from '../helper/getGifs'
import { GifItem } from './GifItem';
import { Usefetchgifs } from '../Hooks/Usefetchgifs';




export const GifGrip = ({category}) => {
    
    const { imagen, isLoading } = Usefetchgifs(category)
    
    
    return (
        <>
            <div className="card-grid">
                <h3>{category}</h3>
                { 
                    isLoading ? (<h2>Cargando...</h2>) : null
                }
                    {
                        imagen.map((image)=>(
                            <GifItem
                                key={image.id}
                                {...image}
                            />
                        ))
                    }
                
            </div>
        </>
    )
}



