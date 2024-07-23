import React, { useState } from 'react'

export const AddCategory = ({ OnNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const trimmedValue = inputValue.trim()
        if (trimmedValue.length > 0) {
            OnNewCategory(trimmedValue)
            setInputValue('')
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder='Buscar Gifs' 
                value={inputValue} 
                onChange={onInputChange}
            />
        </form>
    )
}
