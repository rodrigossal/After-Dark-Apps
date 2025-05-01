import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  // Default to dark mode
  const [darkMode, setDarkMode] = useState(true)
  
  useEffect(() => {
    // Check if localStorage is available
    const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage
    
    if (isLocalStorageAvailable) {
      // Check user saved preference first
      const savedTheme = localStorage.getItem('theme')
      
      if (savedTheme) {
        // Use saved preference if available
        setDarkMode(savedTheme === 'dark')
      } else {
        // Check browser preference
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        
        // Set to browser preference if available, otherwise default to dark
        setDarkMode(prefersDarkMode !== null ? prefersDarkMode : true)
        
        // Set up listener for preference changes
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleMediaQueryChange = (e) => {
          // Only update if user hasn't manually set a preference
          if (!localStorage.getItem('theme')) {
            setDarkMode(e.matches)
          }
        }
        
        // Add listener with compatibility check
        if (darkModeMediaQuery.addEventListener) {
          darkModeMediaQuery.addEventListener('change', handleMediaQueryChange)
        } else if (darkModeMediaQuery.addListener) {
          // For older browsers
          darkModeMediaQuery.addListener(handleMediaQueryChange)
        }
        
        // Cleanup
        return () => {
          if (darkModeMediaQuery.removeEventListener) {
            darkModeMediaQuery.removeEventListener('change', handleMediaQueryChange)
          } else if (darkModeMediaQuery.removeListener) {
            darkModeMediaQuery.removeListener(handleMediaQueryChange)
          }
        }
      }
    }
  }, [])
  
  useEffect(() => {
    // Apply theme and save preference
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark-mode')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark-mode')
        localStorage.setItem('theme', 'light')
      }
    }
  }, [darkMode])
  
  // Pass state and toggle function to components
  const themeProps = { darkMode, setDarkMode }
  
  return <Component {...pageProps} {...themeProps} />
}

export default MyApp
