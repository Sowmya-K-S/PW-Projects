import { useState } from 'react'
import Person from './Components/Person'
import Button from './Components/Button'
import Header from './Components/Header'
import List from './Components/List'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header title="Welcome to my website!" />
    <Person name="John" age="30" />
    <Button text="Click me!" onClick={() => console.log("Button clicked")} />
    <List items={['apple', 'banana', 'orange']} />
    </>
    
  )
}

export default App
