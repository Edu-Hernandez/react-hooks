import React, { useCallback, useState } from 'react'
import { MyTitle } from './ui/MyTitle'
import { MySubTitle } from './ui/MySubTitle'

// con esta forma no se vuelve a renderizar, pero si el subtitulo se pasa en MySubTitle
// const handleCallMyAPI = (myValue: string) => {
//     console.log('llamar a mi api', myValue)
// }

export const MemoHook = () => {
    const [title, setTitle] = useState('Hola')
    const [subtitle, setSubtitle] = useState('mundo')

    // useCallback es un hook que nos permite memorizar una funcion
    const handleCallMyAPI = useCallback(() => {
        console.log('llamar a mi api', subtitle)
    }, [subtitle])

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-thin text-while'>MemoHook</h1>

        <MyTitle title={title}/>

        {/* la función anonima si se vuelve a renderizar cuando se le pasa como prop el subtitle */}
        {/* <MySubTitle subtitle={subtitle} callMyAPI={() =>handleCallMyAPI(subtitle)}/> */}


        <MySubTitle subtitle={subtitle} callMyAPI={handleCallMyAPI}/>


        <button 
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={() => setTitle( 'Hello '+ new Date().getTime())}
        >
            Cambiar Titulo
        </button>

        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'>
            Cambiar sub titulo
        </button>

    </div>
  )
}
