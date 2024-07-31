import React, { useContext } from 'react'
import Mouseover from './Mouseover'
import { ThemeContext } from './Theme'

function Hilds() {
  const theme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: 'dark' ? '#333' : '#CCC',
    color: 'dark' ? '#CCC' : '#333',
    padding: '3rem',
    margin: '3rem'
  }
  return (
    <div className='box' style={themeStyles}>
        <h2> Hi there</h2>
        <Mouseover />
    </div>
  )
}

export default Hilds