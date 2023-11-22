import React, { useState } from 'react'
import "./ToggleButton.scss"

const ToggleButton = () => {
    const [background, setBackground] = useState("light")

    const toggleBackground = () => {
        setBackground((currentBackground) => (currentBackground === 'light' ? 'dark' : 'light'));
      };
  return (
    <div className={background}>
        <button className={`${background}-button`} onClick={toggleBackground}>{`${background} mode`}</button>
    </div>
  )
}

export default ToggleButton
