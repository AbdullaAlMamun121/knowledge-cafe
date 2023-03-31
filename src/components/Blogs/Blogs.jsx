import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';
import './Blogs.css';
const Blogs = () => {

    const [blogsInfo, setBlogsInfo] = useState([]);
    const [asides, setAsides] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
        .then(data => setBlogsInfo(data))
    }, []);

    const handleReadMore = (items) => {
        const newAside = [...asides,items];
        setAsides(newAside);
    //    console.log(title,duration);
    }
    const handleBookMark = (item) => {
        const newAside = [...blogs,item];
        setBlogs(newAside);
        // console.log(newAside);
   }

    return (
        <div className="blogs-container">
            <div className='blog-container'>
                {
                    blogsInfo.map(blogInfo => <Blog blogInfo={blogInfo} handleReadMore={handleReadMore}
                        handleBookMark={handleBookMark}></Blog>)
                }
                
            </div>
            <div>
                <Aside asides={asides} blogs={blogs}></Aside>
            </div>
        </div>
    );
};

export default Blogs;