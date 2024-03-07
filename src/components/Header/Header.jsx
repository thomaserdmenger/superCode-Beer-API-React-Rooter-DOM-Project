import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='header__logo-container'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'>
            <path d='M32 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V96h51.2c42.4 0 76.8 34.4 76.8 76.8V274.9c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7V172.8c0-7.1-5.7-12.8-12.8-12.8H384V311.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z' />
          </svg>
          <Link
            className='header__company'
            to='/'>
            Crafty Brew Haven
          </Link>
        </div>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/allbeers'>All Beers</NavLink>
          <NavLink to='/randombeer'>Random Beer</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header
