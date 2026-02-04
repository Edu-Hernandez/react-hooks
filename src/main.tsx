import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState-useEffect/TrafficLight'
// import { PokemonPage } from './02-examples/PokemonPage'
// import { FocusScreen } from './03-useRef/FocusScreen'
// import { TasksApp } from './04-useReducer/TaskApp'
import { ScrambleWords } from './04-useReducer/ScrambleWords'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight/> */}
    {/* <PokemonPage/> */}
    {/* <FocusScreen/> */}
    {/* <TasksApp/> */}
    <ScrambleWords/>
  </StrictMode>,
)
