import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseStateEx from './components/UseStateEx'
import UseEffectEx from './components/UseEffectEx'
import UseReducer from './components/UseReducer'
import UseRefEx from './components/UseRefEx'
import UseMemoEx from './components/UseMemoEx'

function App() {
  return(
    // <UseStateEx />
    // <UseEffectEx />
    // <UseReducer />
    // <UseRefEx />
    <UseMemoEx />
  )
}

export default App
