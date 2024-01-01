import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import { baseUrl } from '../baseUrl';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {

    const newBaseUrl= "https://codehelp-apis.vercel.app/api/";

    const [blog, setBlog]= useState(null);
    const [reletedblogs, setReletedBlogs]= useState([]);
    const location= useLocation();
    const navigation= useNavigate();
    const {setLoading, loading}= useContext(AppContext);
    const blogId= location.pathname.split("/").at(-1);

    async function fetchReletedBlogs(){
        setLoading(true);
        let url= `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res= await fetch(url);
            const data= await res.json();
            setBlog(data.blog);
            setReletedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error in blog id call");
            setBlog(null);
            setReletedBlogs([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        if(blogId){
            fetchReletedBlogs();
        }
    }, [location.pathname])

  return (
    <div>
      <Header/>
      <div>
        <button
        onClick={() => navigation(-1)}
        >
            Back
        </button>
      </div>
      {
        loading ? 
        (<div>
            <p> Loading</p>
        </div>) :
        blog ?
        (<div>
            <BlogDetails post={blog} />
            <h2>Releted Blogs</h2>
            {
                reletedblogs.map((post) => (
                    <div key={post.id}>
                        <BlogDetails post={post}/>
                    </div>
                ))
            }
        </div>) :
        (
            <div>
               <p> No Blogs Found </p>
            </div>
        )
      }
    </div>
  )
}
 
export default BlogPage
