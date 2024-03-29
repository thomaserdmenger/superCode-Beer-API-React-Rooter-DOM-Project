import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import AllBeers from './pages/AllBeers/AllBeers'
import RandomBeer from './pages/RandomBeer/RandomBeer'
import SingleBeer from './pages/SingleBeer/SingleBeer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
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
        <Route
          path='/singleBeer/:id'
          element={<SingleBeer />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
