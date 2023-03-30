import React from 'react';
import './Blog.css';
const Blog = (props) => {
    // console.log(props.blogInfo);
    const { id, name, img,userImg, date,duration,title,hash_tag } = props.blogInfo;

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
                                <p>{ date}</p>
                            </div>
                        </div>
                        <p>{duration }</p>
                    </div>
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{hash_tag }</p>
                    <a href="#">Mark read</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;