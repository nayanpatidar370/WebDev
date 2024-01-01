import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import PagInation from '../components/PagInation'

const Home = () => {
  return (
    <div>
      <Header/>
      <div>
        <Blogs/>
        <PagInation/>
      </div>
    </div>
  )
}

export default Home
