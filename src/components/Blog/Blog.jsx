import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import './Blog.css';
const Blog = (props) => {

    const { id, name, img,userImg, date,duration,title,hash_tag } = props.blogInfo;
    const handleReadMore = props.handleReadMore;
    const handleBookMark = props.handleBookMark;
    
    return (
        <div>
            <div class="card mb-3">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <div className='user-section'>
                        <div className='user d-flex'>
                            <img src={userImg}/>
                            <div className='user-info'>
                                <h3>{ name}</h3>
                                <p>{date}</p>
                               
                            </div>
                        </div>
                        <p>{duration} min read <FaBookmark onClick={()=>handleBookMark(props.blogInfo)}></FaBookmark></p>
                        
                    </div>
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{hash_tag }</p>
                    <button onClick={()=>handleReadMore(props.blogInfo)}>Mark read</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;

