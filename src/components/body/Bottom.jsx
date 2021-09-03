import React from 'react';


const Bottom = ({name, comment, img}) => {
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <p>{comment}</p>
        </div>
    )
}

export default Bottom
