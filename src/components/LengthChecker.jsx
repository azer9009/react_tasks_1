import React, {useState} from 'react'

const LengthChecker = () => {
    const [yText, setText, length] = useState('')
  return (
    <div>
    <input
     type="text"
     value={yText}
     onChange={(e)=>setText(e.target.value)}
     />
     <h1>Your text length is {yText.length}</h1>
  </div>
  )
}

export default LengthChecker
