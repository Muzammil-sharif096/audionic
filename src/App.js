import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/HomeMain/Home';
import Sale from './Components/Sale/SaleMain/Sale';
import About from './Components/About/AboutMain/About';
import Corporate from './Components/Corporate/CorporateMain/Corporate';
import Blog from './Components/Blog/BlogMain/Blog'
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/about' element={<About />} />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
