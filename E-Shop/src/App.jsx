import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Cart from './Components/Pages/Cart';
import Login from "./Components/Pages/Login"
import Navbar from './Components/Navbar/Navbar';
import SignUp from "./Components/Pages/SignUp";
import SingleProduct from "./Components/Pages/SingleProduct";

const App = () => {
  return (
    <div>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/cart" element={<Cart/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/sign-up" element={<SignUp/>} />
   <Route path="/single-product/:id" element={<SingleProduct/>} />
   {/* <Route path="*" element={<NoPage />} /> */}
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App