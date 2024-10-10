import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <div className="image-container">
            <img src="public/images/card-image-3.jpg" alt="Category 1" />
          </div>
          <button>
            <Link className="link" to="/products/1">
              Жени
            </Link>
          </button>
        </div>
        <div className="row">
          <div className="image-container">
            <img src="public/images/holistic.jpg" alt="Category 2" />
          </div>
          <button>
            <Link className="link" to="/products/2">
              Аксесоари
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="image-container">
            <img src="public/images/forest.jpg" alt="Category 3" />
          </div>
          <button>
            <Link className="link" to="/products/2">
              Мъже
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="image-container">
                <img src="public/images/yoga-card.jpg" alt="Category 4" />
              </div>
              <button>
                <Link className="link" to="/products/2">
                  Постелки
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="image-container">
                <img src="public/images/fire.jpg" alt="Category 5" />
              </div>
              <button>
                <Link className="link" to="/products/2">
                  Книги
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="image-container">
            <img src="public/images/air.jpg" alt="Category 6" />
          </div>
          <button>
            <Link className="link" to="/products/2">
              За дома
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
