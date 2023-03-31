import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';
import './Blogs.css';
const Blogs = () => {

    const [blogsInfo, setBlogsInfo] = useState([]);
    const [asides, setAsides] = useState([]);
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

    return (
        <div className="blogs-container">
            <div className='blog-container'>
                {
                    blogsInfo.map(blogInfo=><Blog blogInfo={blogInfo} handleReadMore={handleReadMore}></Blog>)
                }
                
            </div>
            <div>
                <Aside asides={asides}></Aside>
            </div>
        </div>
    );
};

export default Blogs;