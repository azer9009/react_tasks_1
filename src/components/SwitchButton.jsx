import React, {useState} from 'react'

const SwitchButton = () => {
    const [open, setOpen] = useState(false)

    const switchBtn = () => {
        setOpen(!open)
    }

  return (
    <div>
      <button style={{

        backgroundColor : open ? 'greenyellow' : 'red'

      }} onClick={switchBtn}>
        {open ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

export default SwitchButton
