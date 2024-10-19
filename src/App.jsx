import React from 'react'
import Counter from './pages/Counter'
import SwitchButton from './components/switchButton'
import ColorPicker from './components/ColorPicker'
import LengthChecker from './components/LengthChecker'
import HideText from './components/HideText'
import CounterSteps from './pages/CounterSteps'

const App = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection : 'column',
      gap : '50px'
    }}>
      <Counter/>
      <SwitchButton/>
      <ColorPicker/>
      <LengthChecker/>
      <HideText/>
      <CounterSteps/>
    </div>
  )
}

export default App
