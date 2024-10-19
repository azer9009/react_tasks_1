import React, { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState('')
  return (
    <div>
      <input
       type="text"
       value={color}
       onChange={(e)=>setColor(e.target.value)}
       />
       <h1>Senin sevimli rengin {color}</h1>
    </div>
  )
}

export default ColorPicker
