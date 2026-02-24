import { createContext, useContext, useState } from 'react'

const HeaderThemeContext = createContext(null)

export const HeaderThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <HeaderThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </HeaderThemeContext.Provider>
  )
}

export const useHeaderTheme = () => {
  const context = useContext(HeaderThemeContext)

  if (!context) {
    throw new Error('useHeaderTheme must be used within HeaderThemeProvider')
  }

  return context
}
