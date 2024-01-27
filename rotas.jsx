import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Filme from './src/pages/Filmes';
import PageNotFound from './src/pages/PageNotFound';
import Header from './src/components/Header';
import Favoritos from './src/pages/Favoritos';

function Rotas() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/filmes/:id' element={<Filme />}/>
        <Route path='/favoritos' element={<Favoritos />}/>

        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas