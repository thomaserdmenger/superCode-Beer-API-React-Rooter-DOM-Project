import './AllBeers.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AllBeers = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <main>
      <section className='allbeers'>
        <h1>All Tasty Beers</h1>
        <section className='allbeers__grid'>
          {data.map((item) => {
            return (
              <article
                className='allbeers__subgrid'
                key={item._id}>
                <div>
                  <img
                    className='allbeers__image-container'
                    src={item.image_url}
                    alt=''
                  />
                </div>
                <div className='allbeers__content-container'>
                  <h2>{item.name}</h2>
                  <h3>{item.tagline}</h3>
                  <p>Created by: {item.name}</p>
                  <Link to={`/singleBeer/${item._id}`}>Details</Link>
                </div>
              </article>
            )
          })}
        </section>
      </section>
    </main>
  )
}

export default AllBeers
