import React from 'react';
import './BookMark.css';

const BookMark = ({ blogs }) => {
   
    let totalBookMark = 0;
    for (const bookMark of blogs) {
        totalBookMark = totalBookMark + bookMark.count;
    }
    return (
        <div>
            <h4>Bookmarked Blogs :{totalBookMark}</h4>
            <div>
                {
                    blogs.map(blog =><div className='card mb-3'>
                        <h5>{blog.title}</h5>
                    </div> )
                }
            </div>
        </div>
    );
};

export default BookMark;
