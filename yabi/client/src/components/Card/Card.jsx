import React from 'react'
import "./Card.scss"
import {Link} from 'react-router-dom'


function Card({ item }) {

  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew&&<span>Нов продукт</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3 className='price-header'>{item.oldPrice} лв</h3>
          <h3 className='price-header'>{item.price} лв</h3>
        </div>
      </div>
    </Link>
  );
}


export default Card