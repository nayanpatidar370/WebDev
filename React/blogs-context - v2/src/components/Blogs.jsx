import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
    // Consume
    const { posts, loading } = useContext(AppContext);
    console.log(posts);
    return (
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-5 mb-[78px] items-center h-screen">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="">
                    <p className="">No Post Found</p>
                </div>
            ) : (
                posts.map((post) => {
                     return <BlogDetails key={post.id} post={post}/>
                })
            )}
        </div>
    );
};

export default Blogs;
