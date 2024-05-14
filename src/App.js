<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/HomeMain/Home';
import Sale from './Components/Sale/SaleMain/Sale';
import About from './Components/About/AboutMain/About';
import Corporate from './Components/Corporate/CorporateMain/Corporate';
import Blog from './Components/Blog/BlogMain/Blog'
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/HomeMain/Home";
import Sale from "./Components/Sale/SaleMain/Sale";
import About from "./Components/About/AboutMain/About";
import Corporate from "./Components/Corporate/CorporateMain/Corporate";
import Blog from "./Components/Blog/BlogMain/Blog";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import Personal from "./Components/Sale/Personal";


>>>>>>> fdcf558e9eec1e3eef33956b56e30edb4c4f92f8
function App() {
  return (
    <>
      <Navbar />
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Home />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/about' element={<About />} />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Account' element = {<SignUp/>}/>
=======
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/about" element={<About />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personal" element={<Personal />} />
>>>>>>> fdcf558e9eec1e3eef33956b56e30edb4c4f92f8
      </Routes>
      <Footer />
    </>
  );
}
<<<<<<< HEAD
export default App;
=======

export default App;



























>>>>>>> fdcf558e9eec1e3eef33956b56e30edb4c4f92f8
