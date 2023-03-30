import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';
import './Blogs.css';
const Blogs = () => {
    const [blogsInfo, setBlogsInfo] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
        .then(data => setBlogsInfo(data))
    }, []);

    return (
        <div className="blogs-container">
            <div className='blog-container'>
                {
                    blogsInfo.map(blogInfo=><Blog blogInfo={blogInfo}></Blog>)
                }
                
            </div>
            <div>
                <Aside></Aside>
            </div>
        </div>
    );
};

export default Blogs;