import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Navbar />
      <Hero />
      <HeadlineCards/>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>

    
     
    </>
  )
}

export default App
