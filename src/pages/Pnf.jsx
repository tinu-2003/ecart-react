import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Pnf() {
  return (
 <>
 <Header/>
        <div>
              <div className='text-primary text-center'>
          <img width={'500px'} src="https://webartdevelopers.com/blog/wp-content/uploads/2020/02/CSS-Train-404-Page.gif" alt="404" />
            <h2>PageNotFound</h2>
          <p>Sorry, We Couldn't Find The Page</p>
          <Link to={'/'}>     <button className='btn btn-dark'> Go Back</button></Link>
      
    </div>
        </div>

        <Footer/>
 </>
  )
}

export default Pnf