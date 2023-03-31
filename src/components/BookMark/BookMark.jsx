import React from 'react';
import './BookMark.css';
const BookMark = ({ blogs }) => {
    // console.log(blogs);
    let totalBookMark = 0;
    for (const bookMark of blogs) {
        totalBookMark = totalBookMark + bookMark.count;
    }
    return (
        <div>
            <h4>Bookmarked Blogs :{totalBookMark}</h4>
            <div>
                {
                    blogs.map(blog => <div className='card'>
                        <p>{blog.title }</p>
                   </div>) 
                }
            </div>
        </div>
    );
};

export default BookMark;