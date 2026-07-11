import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddRegistration from './components/AddRegistration'
import SearchRegistration from './components/SearchRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddRegistration/>
      <SearchRegistration/>
    </>
  )
}

export default App
