import React, { useContext, useState } from 'react'
import Hilds from './Hilds'
import ThemeContext from './ThemeContext'
import ThemeProvider from './ThemeContext'


const Theme = () => {
    const dark = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: dark ? '#333' : '#CCC',
        color: dark ? '#CCC' : '#333',
        padding: '3rem',
        margin: '3rem'
      }
  return (
    <ThemeProvider>
        <div>
            <button onClick={toggleTheme}>Toggle</button>
            <Hilds />
        </div>
    </ThemeProvider>
  )
}

export default Theme