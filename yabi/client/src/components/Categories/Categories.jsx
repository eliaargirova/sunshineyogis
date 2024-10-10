import React from 'react'
import "./Categories.scss"
import {Link} from 'react-router-dom'


const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="public/images/card-image-3.jpg"/>
                <button>
                    <Link className="link" to="/products/1">Вода</Link>
                </button>
            </div>
            <div className="row">
            <img src="public/images/holistic.jpg"/>
            <button>
                    <Link className="link" to="/products/2">Огън</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="public/images/forest.jpg"/>
            <button>
                    <Link className="link" to="/products/2">Огън</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
        <div className="row">
        <div className="col">
            <div className="row">
            <img src="public/images/yoga-card.jpg"/>
            <button>
                    <Link className="link" to="/products/2">Огън</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="public/images/fire.jpg"/>
            <button>
                    <Link className="link" to="/products/2">Огън</Link>
                </button>
            </div>
        </div>
        </div>
        <div className="row">            <img src="public/images/air.jpg"/>
            <button>
                    <Link className="link" to="/products/2">Огън</Link>
                </button></div>
        </div>

    </div>
  );
}

export default Categories;
