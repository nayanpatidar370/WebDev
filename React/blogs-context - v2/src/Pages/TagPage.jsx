import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import Blogs from '../components/Blogs';
import PagInation from '../components/PagInation';

const TagPage = () => {
    const navigation= useNavigate();
    const location= useLocation();
    const tag= location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div>
        <button
        onClick={() => navigation(-1)}>
        Back
        </button>

        <h2>
            Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <PagInation/>
    </div>
  )
}

export default TagPage
