import { useState } from 'react'
import './App.css'
import { Habit } from './components/habit'

function App() {
  const [count, setCount] = useState(0)

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
