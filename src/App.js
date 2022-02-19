import logo from './logo.png';
import './App.css';
import NavBar from './components/Nav';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourites from './components/Favourites';

import {BrowserRouter,Routes,Route}from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    
    <NavBar></NavBar>

    <Routes>
        <Route path='/'element={<> <Banner/> <Movies/>  </>}/>
        <Route path='/favourites' element={<Favourites/>}/>
    </Routes>
{/* 
    <Banner></Banner>
    <Movies></Movies>
    <Pagination></Pagination> */}
    
    </BrowserRouter>
    
    // navbar
    // banner
    // Trending movies
    // pagination
  );
}

export default App;
