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
    <div className='wrapper'>
      <main>
        <section className='allbeers'>
          <h1 className='allbeers__heading'>All Tasty Beers</h1>
          <section className='allbeers__grid'>
            {data
              ? data.map((item) => {
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
                        <h2 className='allbeers__heading_two'>{item.name}</h2>
                        <h3 className='allbeers__heading-three'>
                          {item.tagline}
                        </h3>
                        <p className='allbeers__created'>
                          Created by: {item.name}
                        </p>
                        <Link
                          className='allbeers__links'
                          to={`/singleBeer/${item._id}`}>
                          Details
                        </Link>
                      </div>
                    </article>
                  )
                })
              : '<p>Loading...</p>'}
          </section>
        </section>
      </main>
    </div>
  )
}

export default AllBeers
