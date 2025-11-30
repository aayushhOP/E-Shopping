import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'


function App() {
  
  return (
    <Routes>

      <Route 
        index        // or path = "/" 
        element = {<HomePage />}
      />

      <Route 
        path = "checkout" 
        element = {<div>check checkout page</div>}
      />

    </Routes>
    
    
  )
}

export default App
