import React from 'react';
import './BookMark.css';
const BookMark = ({ blogs }) => {
    // console.log(blog);
    let totalBookMark = 0;
    for (const bookMark of blogs) {
        totalBookMark = totalBookMark + bookMark.count;
    }
    return (
        <div>
            <h4>Bookmarked Blogs :{ totalBookMark}</h4>
           
        </div>
    );
};

export default BookMark;