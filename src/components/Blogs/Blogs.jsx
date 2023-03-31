import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';
import './Blogs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const [blogsInfo, setBlogsInfo] = useState([]);
    const [asides, setAsides] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogsInfo(data))
    }, []);

    const handleReadMore = (items) => {
        const newAside = [...asides, items];
        setAsides(newAside);
    }
    
    const handleBookMark = (item) => {
        const index = blogs.findIndex((blog) => blog.id === item.id);
        if (index !== -1) {
            toast.info(`${item.title} has been bookmarked again!`);
            const newAside = [...blogs, item];
            setBlogs(newAside);
            setAdded(true);
        } else {
            const newAside = [...blogs, item];
            setBlogs(newAside);
            setAdded(true);
        }

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
                <Aside asides={asides} blogs={blogs} added={added}></Aside>
            </div>
        </div>
    );
};

export default Blogs;