import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Body from './component/body/body';
import Cart from './component/body/cart/cart';
import Product from './component/body/product-deteils/product-details';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Routes>
        <Route>
          <Route path='/' element={<Body/>} />
        <Route path="/product-detail/:id" element={<Product />}/>
        <Route exact path="/cart" element={<Cart />}/>
        </Route>
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;