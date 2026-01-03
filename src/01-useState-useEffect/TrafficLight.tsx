import { useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLight = () => {

    const {
        countdown,
        handleColorChange, 
        percentage,
        greenLight,
        redLight,
        yellowLight
    } = useTrafficLight()

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
        <div className="flex flex-col items-center space-y-8">

            <h2 className="text-white text-xl">tiempo restante: {countdown}</h2>

            <div className="w-64 bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${percentage}%`}}
                >

                </div>
            </div>
          
            <div className={`w-32 h-32 ${redLight} rounded-full`}></div>
            <div className={`w-32 h-32 ${yellowLight} rounded-full`}></div>
            <div className={`w-32 h-32 ${greenLight} rounded-full`}></div>
  
            {/* Botón para cambiar el estado de la luz */}
            <div className="flex gap-2">
                <button
                    onClick={() => handleColorChange('red')}
                className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Rojo
                </button>
                <button
                    onClick={() => handleColorChange('yellow')}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Amarillo
                </button>
                <button
                    onClick={() => handleColorChange('green')}
                className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Verde
                </button>
            </div>
        </div>
      </div>
    );
  };