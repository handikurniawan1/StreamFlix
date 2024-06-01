import React from "react";

function Image({poster, title}){

    return(
        <div className="card-image">
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
        </div>
    )
}

export default Image;