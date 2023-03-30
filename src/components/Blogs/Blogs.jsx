import React from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className="blogs-container">
            <div className='blog-container'>
                <Blog></Blog>
            </div>
            <div>
                <Aside></Aside>
            </div>
        </div>
    );
};

export default Blogs;