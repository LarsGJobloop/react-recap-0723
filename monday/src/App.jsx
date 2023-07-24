import { useEffect } from 'react'
import './App.css'
import {useThemeColor } from './hooks/useThemeColor'

function App() {
  const { theme, changeTheme } = useThemeColor()

  useEffect(
    () => {
      console.log("Component mounted")

      return () => {
        console.log("Component unmounting")
      }
    },
    []
  )

  return (
    <div className={(theme === "dark") ? "palette-dark" : ""}>
      <h1>Theme Switcher</h1>
      <button onClick={changeTheme}>Theme</button>
    </div>
  )
}

export default App
