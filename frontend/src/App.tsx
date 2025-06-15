import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Rent from './pages/Rent';
import Product from './pages/Product';
import { CarrinhoProvider } from './context/CarrinhoProvider';  // Corrija o caminho se necessário
import Cart from './pages/Cart'
import Budget from "./pages/Budget";

function App() {

  return (
    <CarrinhoProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rent" element={<Rent/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/budget" element={<Budget/>}/>
      </Routes>
    </CarrinhoProvider>
  )
}

export default App
