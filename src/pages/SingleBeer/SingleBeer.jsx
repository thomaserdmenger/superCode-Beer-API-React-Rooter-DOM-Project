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
          <h1 className='singlebeer__heading'>SingleBeer</h1>
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
                  <img
                    src='/images/Back.png'
                    alt=''
                  />
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
