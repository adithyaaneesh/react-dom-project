import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Shop from './components/Shop';
import About from './components/About';
import Faq from './components/Faq';
import Gift from './components/Gift';
import Contact from './components/Contact';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Error from './components/Error';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import ProtectedRoutes from './hooks/useProtectedRoutes';
// import Magnet from './components/Magnet';

// import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast.error('Here is your toast.');




function App() {


  return (
  <>
  <BrowserRouter>
      <Header />
      <ProtectedRoutes/>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/gift' element={<Gift/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
      <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;
