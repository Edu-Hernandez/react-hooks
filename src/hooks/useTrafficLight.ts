
import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type TrafficLightColor = 'red' | 'yellow' | 'green';
// type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red')
    const [countdown, setCountdown] = useState(5)

    //efecto para disminuir tiempo
    useEffect(()=>{
        if(countdown === 0) return

        const internalId = setTimeout(() => {
            setCountdown(prev => prev - 1)
        }, 1000);

        return() => {
            clearInterval(internalId)
        }

    }, [countdown])

    //efecto para cambiar color

    useEffect(() => {

        if(countdown > 0) return

        setCountdown(5)
        if (light === 'red') {
            setLight('green')
            return
        }
        if (light === 'yellow') {
            setLight('red')
            return
        }
        if (light === 'green') {
            setLight('yellow')
            return
        }

    }, [countdown, light])

    const handleColorChange = (color: TrafficLightColor) => {
        console.log({color})
        setLight(color)
    }

  return {
    colors,
    light,
    countdown,
    handleColorChange,

    percentage: (countdown / 5) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
  }
}
