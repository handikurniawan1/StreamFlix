import React from "react";

function Description({title, rating, date, price}){

    return(
        <>
            <h2 className="title">{title}</h2>
            <p className="rating">Rating: {rating}</p>
            <p className="year">{date}</p>
            <p className='price'>Price: {price ? `Rp.${price.toLocaleString('id-ID')}` : 'Not available'}</p>
        </> 
    )
}   

export default Description;