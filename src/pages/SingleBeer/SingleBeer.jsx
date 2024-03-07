import './SingleBeer.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const SingleBeer = () => {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState(null)

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
  }, [])

  const { id } = useParams()

  useEffect(() => {
    const result = data.find((item) => item._id === id)
    setFilteredData(result)
  }, [data])

  return (
    <div className='wrapper'>
      <main>
        <section className='singlebeer'>
          {filteredData ? (
            <article className='singlebeer__container'>
              <div className='singlebeer__image-container'>
                <img
                  className='singlebeer__image'
                  src={filteredData.image_url}
                  alt={filteredData.tagline}
                />
              </div>
              <div className='singlebeer__content-container'>
                <h2 className='singlebeer__heading-two'>{filteredData.name}</h2>
                <h3 className='singlebeer__heading-three'>
                  {filteredData.tagline}
                </h3>
                <div className='singlebeer__data'>
                  <p>First brewed:</p>
                  <p>{filteredData.first_brewed}</p>
                </div>
                <div className='singlebeer__data'>
                  <p>Attenuation level: </p>
                  <p>{filteredData.attenuation_level}</p>
                </div>
                <p className='singlebeer__description'>
                  {filteredData.description}
                </p>
                <Link
                  to='/allbeers'
                  className='singlebeer__link'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'>
                    <path d='M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z' />
                  </svg>
                </Link>
              </div>
            </article>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
    </div>
  )
}

export default SingleBeer
