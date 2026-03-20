import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"

import Header from "./components/Header"
import Footer from "./components/Footer"


import Home from "./pages/Home"
import Products from "./pages/Products"

function App() {
  return (
    <BrowserRouter basename="/klothink/">

      <Header />

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App