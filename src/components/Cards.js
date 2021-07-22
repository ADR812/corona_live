import React from 'react';
import "../components/Cards_sty.css"


const Cards = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-details">
          <h1 className="card-head">{props.head}</h1>
        </div>
          <p>{props.dat}</p>
      </div>
    </>
  );
}

export default Cards