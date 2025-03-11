import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  // Estado para o modo escuro
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(() => {
    // Verificar preferência do usuário
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])
  
  useEffect(() => {
    // Aplicar tema e salvar preferência
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])
  
  // Passa o estado e a função para alternar o tema para os componentes
  const themeProps = { darkMode, setDarkMode }
  
  return <Component {...pageProps} {...themeProps} />
}

export default MyApp
