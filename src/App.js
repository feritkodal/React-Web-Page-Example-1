import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landingPage/Landing'
import BookProducts from './pages/products/book_a_product/book_a_product'
import PageNotFound from './pages/404/PageNotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='book_a_product' element={<BookProducts />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;