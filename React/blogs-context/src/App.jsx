import "./App.css";
import Header from "./components/Header"
import Blogs from "./components/Blogs"
import PagInation from "./components/PagInation";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";



function App() {
  const {fetchBlogPosts}= useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[])

  return (
 <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">  
  <Header/>
  <Blogs/>
  <PagInation/>
 </div>
  );
}

export default App;
