import { useState } from 'react'
import AppRouter from './router/AppRouter'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import './App.scss'
import { HeaderThemeProvider } from './context/HeaderThemeContext'

function App() {
  return (
    <HeaderThemeProvider>
      <Header />
      <AppRouter />
      <Footer />
    </HeaderThemeProvider>
  )
}

export default App
