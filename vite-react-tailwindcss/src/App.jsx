import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-2xl text-center font-bold underline bg-red-600 h-12">
        Hallo Wowa
      </h1>
    </div>
  )
}

export default App
