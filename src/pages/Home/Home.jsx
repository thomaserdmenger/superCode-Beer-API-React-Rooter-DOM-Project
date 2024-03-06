import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='wrapper'>
      <main>
        <section className='home'>
          <h1>Welcome to Crafty Brew Haven</h1>
          <article className='home__items'>
            <div className='home__image-container'>
              <img
                src='/images/home-beer1.jpg'
                alt='Beer Sortiment'
              />
              <Link
                to='/allbeers'
                className='home__links'>
                All Beers
              </Link>
            </div>
            <p>
              Welcome to our beer wonderland! Explore our vast selection of
              brews from around the globe, ranging from crisp lagers to hoppy
              IPAs and rich stouts. Whether you're a seasoned beer enthusiast or
              just starting your journey, we've got something for every taste
              bud. Cheers to discovering your new favorite brew!
            </p>
          </article>
          <article className='home__items'>
            <div className='home__image-container'>
              <img
                src='/images/home-beer2.png'
                alt='Random Beer'
              />
              <Link
                to='/randombeer'
                className='home__links'>
                Random Beer
              </Link>
            </div>
            <p>
              Ready for a surprise? Click the 'Random Beer' button and let fate
              guide you to a new beer adventure! Discover a hidden gem from our
              extensive collection with just one click. Who knows, you might
              just find your next go-to brew! Let the beer roulette begin!
            </p>
          </article>
        </section>
      </main>
    </div>
  )
}

export default Home
