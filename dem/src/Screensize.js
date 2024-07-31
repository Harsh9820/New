import React, { useEffect, useState } from 'react'

function Screensize() {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
    const handleSize = () => {
      setScreenHeight(window.innerHeight)
      setScreenWidth(window.innerWidth)
    }
  
    useEffect((e) => {
      window.addEventListener('resize', handleSize)
    
      return () => {
        window.removeEventListener('resize', handleSize)
      }
    }, [])
    
    return (
      <div className="App">
        <h1>Height : {screenHeight}</h1>
        <h1>Width : {screenWidth}</h1>
      </div>
    );
}

export default Screensize