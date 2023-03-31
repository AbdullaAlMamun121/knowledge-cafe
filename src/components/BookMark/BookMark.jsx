import React from 'react';
import './BookMark.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const BookMark = ({ blogs, added }) => {
    // console.log(added);

    let totalBookMark = 0;
    for (const bookMark of blogs) {
        totalBookMark = totalBookMark + bookMark.count;
    }
    return (
        <div>
            <h4>Bookmarked Blogs :{totalBookMark}</h4>
            <div>
                {
                    blogs.map(blog =><div className='card'>
                        <h5>{blog.title}</h5>
                    </div> )
                }
            </div>
        </div>
    );
};

export default BookMark;
