import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/concecionaria'; 
import Sorvetes from './pages/sorveteria';
import Home from './pages/home';
import Instagram from './pages/instagram';
import Filmes from './movies/';
import NotFound from './config';

export default function Routess(){
    return(
        <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/concecionaria' element={<App/>} />
    <Route path='/filme' element={<Filmes/>} />
    <Route path='/sorvetinho' element={<Sorvetes/>} />
    <Route path='/insta' element={<Instagram/>} />
    <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    )
}