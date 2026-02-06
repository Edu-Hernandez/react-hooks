import { memo } from "react";

interface Props {
    subtitle: string;

    callMyAPI: (myValue: string) => void;
}

export const MySubTitle = memo(({subtitle, callMyAPI}: Props) => {


    console.log('MySubTitle re-render')
    
  return (
    <>
      <h1 className='text-2xl font-thin text-while'>{subtitle}</h1>

      <button 
      className="bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={() => callMyAPI(subtitle)}>
          llamar a función
      </button>
    </>
  )
})
