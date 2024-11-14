
import './App.css'
import { RegistrationPage } from './components/pages/RegistrationPage'
import { Logo } from './components/Logo/Logo'

function App() {
  return (
    <>
      <div className='container'>
        <Logo />
        <RegistrationPage />
      </div>      
    </>
  )
}

export default App
