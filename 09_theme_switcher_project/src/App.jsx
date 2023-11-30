
import { useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Themebutton from './components/Themebutton'
import Card from './components/Card'
import { useState } from 'react'

function App() {

  // step-6****** defining the context parameters again make sure the name is same;
  const [themeMode, setthemeMode] = useState("light")

  const lightTheme = () => {
    setthemeMode("light")
  }

  const darkTheme = () => {
    setthemeMode("dark")
  }

  // actual change in theme;
  // step-7 *****useeffect --> not related to context

  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
  <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <Themebutton/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
   </ThemeProvider> 

  )
}

export default App
