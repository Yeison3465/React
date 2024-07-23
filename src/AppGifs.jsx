import React from 'react'
import { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrip } from './Components/gifGrip'



export const AppGif = () => {
    const [categories, setCategories] = useState([''])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
        console.log(newCategory)
    }

    return (
        <>
            <h1>Hola mundo</h1>
            <AddCategory OnNewCategory={onAddCategory} />
            
            <ol>
                {categories.map(category => (
                    <GifGrip key={category} category={category}></GifGrip>
                ))}
            </ol>
        </>
    )
}
