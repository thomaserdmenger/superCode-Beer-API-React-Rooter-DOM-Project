import { Link } from 'react-router-dom'
import './RandomBeer.css'
import { useState, useEffect } from 'react'

const RandomBeer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className='wrapper'>
      <main>
        <section className='randombeer'>
          <article className='randombeer__container'>
            <div className='randombeer__image-container'>
              <img
                className='randombeer__image'
                src={data.image_url}
                alt={data.name}
              />
            </div>
            <div className='randombeer__content-container'>
              <h2 className='randombeer__heading_two'>{data.name}</h2>
              <h3 className='randombeer__heading-three'>{data.tagline}</h3>
              <div className='randombeer__data'>
                <p>First brewed:</p>
                <p>{data.first_brewed}</p>
              </div>
              <div className='randombeer__data'>
                <p>Attenuation level: </p>
                <p>{data.attenuation_level}</p>
              </div>
              <p className='randombeer__description'>{data.description}</p>
              <Link
                to='/allbeers'
                className='randombeer__link'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'>
                  <path d='M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z' />
                </svg>
              </Link>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default RandomBeer
