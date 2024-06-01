import React from "react";

function Pagination({page, prev, next}){

    return (
        <div className="pagination">
          <button className="prev" onClick={prev}>prev</button>
          <div className="page"><p>{page}</p></div>
          <button className="next" onClick={next}>next</button>
        </div>
    )
}

export default Pagination;