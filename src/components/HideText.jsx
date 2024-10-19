import React, { useState } from 'react'

const HideText = () => {
    const [visible, setVisible] = useState(true)

    function changeVisible() {
        setVisible(!visible)
    }
  return (
    <div>
      <button onClick={changeVisible}>
        {visible ? ' Text is visible' : 'Text is invisible'}
      </button>
    {visible &&
    
      <p>Your text</p>
    }
    </div>
  )
}

export default HideText
