import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AllBeers from './pages/AllBeers/AllBeers'
import RandomBeer from './pages/RandomBeer/RandomBeer'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/allbeers'
          element={<AllBeers />}
        />
        <Route
          path='randombeer'
          element={<RandomBeer />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
