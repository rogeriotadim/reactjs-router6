import { SyntheticEvent } from 'react';
import './App.css'
import Button from './components/generics/Button'

function App() {
    const handleEvent = (e: SyntheticEvent) => {
        console.log(e);
    }

  return (
    <>
        <h1 className='h1'>Fala meu!!!</h1>
        <p>Emmet acho q foi</p>
        <Button text='Clique aqui' onClick={handleEvent}></Button>
    </>
  )
}

export default App
