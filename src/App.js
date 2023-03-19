import './App.css';
import './style/style.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Top from './components/Top'
import Category from './components/Category'
import Shop from './components/Shop'
import Product from './components/Product'
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Newslatter from './components/Newslatter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="hero">
        <Hero/>
      </div>
      <div className="topProduct">
        <Top/>
      </div>
      <div className="topCategory">
        <Category/>
      </div>
      <div className="shop">
        <Shop/>
      </div>
      <div className="product">
        <Product/>
      </div>
      <div className="testimonial">
        <Testimonial/>
      </div>
      <div className="blog">
        <Blog/>
      </div>
      <div className="newslatter">
        <Newslatter/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
