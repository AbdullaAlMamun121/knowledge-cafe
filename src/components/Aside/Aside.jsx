import React from 'react';
import BookMark from '../BookMark/BookMark';
import './Aside.css'
const Aside = ({ asides, blogs, added }) => {
    
    let readTotal = 0;
    for (const item of asides) {
        readTotal = readTotal + item.duration;
    } 
    return (
        <div>
            <div className='time-section'>
                <h3>Spent time on read :{ readTotal} min</h3>
            </div>
            <BookMark blogs={blogs} added={added}></BookMark>
        </div>
    );
};

export default Aside;