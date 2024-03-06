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
          <h1 className='randombeer__heading'>RandomBeer</h1>
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
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default RandomBeer
