import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/Home" element={<Home />}  />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
