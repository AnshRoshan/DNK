import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Policy from "./pages/Policy"
import Pagenotfound from "./pages/Pagenotfound"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import Adminpage from "./pages/Adminpage"
import Checkout from "./mdb/Checkout"
import Home from "./mdb/Home"
import ProductInfo from "./components/ProductInfo"
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route path='/admin' element={<Adminpage />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </>
  )
}

export default App
