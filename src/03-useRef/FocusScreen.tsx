// import React from 'react'

import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    console.log(inputRef.current?.value)

    const handleClick = () => {
        console.log(inputRef.current?.value)
        inputRef.current?.select()
        // inputRef.current?.focus() esto nada lo muestra en el campo
    }
  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-thin text-while'>Focus Screen</h1>

        <input 
        ref={inputRef}
        type='text' 
        className='bg-white text-black px-4 py-2 rounded-md'
        autoFocus
        
        />

        <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}
        > 
        Set focus
        </button>
    </div>
  )
}
