import './styles/global.css'
import { Habit } from './components/habit'

function App() {
  return (
    <div className="App">
      <h1>hello, world</h1>
      <Habit completed={3} />
      <Habit completed={0} />
      <Habit completed={1} />
      <Habit completed={0} />
      <Habit completed={0} />
      <Habit completed={0} />
      <Habit completed={0} />
      <Habit completed={0} />
      <Habit completed={0} />
    </div>
  )
}

export default App

/*
  Componente: Reaproveitar / Isolar
  Propriedade: Informação enviada para modificar um componente visual ou compormentalmente
*/
