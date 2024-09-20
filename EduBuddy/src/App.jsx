import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BodyMain from './body/body'
import SideMenu from './sideMenu/sideMenu'
function App() {

  return (
    <div className='d-flex position-absolute top-0 start-0 w-100 h-100'>
      <SideMenu/>
      <BodyMain/>
    </div>
  )
}

export default App
