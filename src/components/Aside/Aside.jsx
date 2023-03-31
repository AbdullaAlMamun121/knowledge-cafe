import React from 'react';
import './Aside.css'
const Aside = ({ asides }) => {
    
    // console.log(asides);

    let readTotal = 0;
    for (const item of asides) {
        readTotal = readTotal + item.duration;
    }
    
    return (
        <div>
            <div className='time-section'>
                <h3>Spent time on read : {readTotal} min</h3>
            </div>
            <h4>Bookmarked Blogs : { (asides.length)}</h4>
            <div className='card'> 
            
           </div>
        </div>
    );
};

export default Aside;