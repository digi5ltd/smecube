import { useState } from 'react'
import SMECubeLanding from './components/SMECubeLanding.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SMECubeLanding />
    </>
  )
}

export default App
