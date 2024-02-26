import './App.css';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import {Route, Routes} from 'react-router-dom';
import Contacts from './pages/Contacts.jsx';
import NotFound from './pages/NotFound.jsx';
import {ProductProvider} from './context/ProductContext.jsx';
import ProductList from "./components/ProductList.jsx";

function App() {
  return (
    <div>
      <ProductProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path='/filter' element={<ProductList/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </ProductProvider>
    </div>
  );
}

export default App;
