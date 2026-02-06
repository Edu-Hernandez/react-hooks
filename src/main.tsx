import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUser } from './08-use-suspense/api/get-user.actions'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState-useEffect/TrafficLight'
// import { PokemonPage } from './02-examples/PokemonPage'
// import { FocusScreen } from './03-useRef/FocusScreen'
// import { TasksApp } from './04-useReducer/TaskApp'
// import { ScrambleWords } from './04-useReducer/ScrambleWords'
// import { MemoHook } from './06-memos/MemoHook'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { InstagromApp } from './07-useOptimistic/InstragromApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    {/* <HooksApp /> */}
    {/* <TrafficLight/> */}
    {/* <PokemonPage/> */}
    {/* <FocusScreen/> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords/> */}
    {/* <MemoHook/> */}
    {/* <MemoCounter/> */}
    {/* <InstagromApp/> */}
    <Suspense fallback={(
      <div className="bg-gradient flex flex-col items-center justify-center h-screen">
        <h3 className="text-2xl font-thin text-white">Cargando...</h3>
      </div>
    )}>
      <ClientInformation getUsers={getUser(1)} />
    </Suspense>
  </StrictMode>,
)
