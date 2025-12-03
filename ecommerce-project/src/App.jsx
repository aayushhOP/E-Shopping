import axios from 'axios'
import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { Orders } from './pages/orders/Orders'
import './App.css'
import { TrackingPage } from './pages/TrackingPage'


function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data);
  }

  useEffect(() =>{
   loadCart();     
  }, []);
  
  
  return (
    <Routes>

      <Route 
        index        // or path = "/" 
        element = {<HomePage cart={cart} loadCart = {loadCart} />}
      />

      <Route 
        path = "checkout" 
        element = {<CheckoutPage cart = {cart} />}
      />
      
      <Route 
        path = "orders"
        element = {<Orders cart = {cart} />}
      />

      <Route
        path  = "tracking"
        element = {<TrackingPage />} 
      />

    </Routes>
    
    
  )
}

export default App
