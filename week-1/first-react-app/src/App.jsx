import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './Components/Button'

function App() {
  return (
    <div>
      <h1 id='header'>React and Next.js</h1>
      <Button appName="Patika" color="white" bgColor="blue">
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1707px-Plus_symbol.svg.png' width={30} height={30} />
          <span>Increase</span>
        </div>
      </Button>
      {/* <Button appName="Patika" color="white" bgColor="green" text="Update Count" /> */}
    </div>
  )
}

export default App
