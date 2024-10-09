import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import "./FeaturedProducts.scss";

function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "public/images/tea-herbs.jpg",
      img2: "public/images/tea-herbs-2.jpg",
      title: "Билков ",
      isNew: true,
      oldPrice: 10,
      price: 6,
    },
    {
      id: 2,
      img: "public/images/yoga-mat-close.jpg",
      img2: "public/images/yoga-mat-2.png",
      title: "Йога постелка",
      isNew: true,
      oldPrice: 10,
      price: 6,
    },
    {
      id: 3,
      img: "public/images/accessory.jpg",
      img2: "public/images/eye-pillow.png",
      title: "Възглавница за очи",
      isNew: true,
      oldPrice: 10,
      price: 6,
    },
    {
      id: 4,
      img: "public/images/incense-sticks-2.png",
      img2: "public/images/incense-stick.jpg",
      title: "Инсенс пръчки",
      isNew: true,
      oldPrice: 10,
      price: 6,
    },
    // Add two more products for mobile view
    {
      id: 5,
      img: "public/images/jewlery.jpg",
      // img2: "public/images/product5-2.jpg",
      title: "Продукт 5",
      isNew: true,
      oldPrice: 10,
      price: 6,
    },
    {
      id: 6,
      img: "public/images/yoga-blocks.jpg",
      img2: "public/images/product6-2.jpg",
      title: "Продукт 6",
      isNew: true,
      oldPrice: 10,
      price: 6,
    },
  ];

  // State to hold the number of products to display
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setVisibleProducts(6); // Show 6 products on mobile
      } else {
        setVisibleProducts(4); // Show 4 products on larger screens
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize); // Update on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up
    };
  }, []);

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} продукти</h1>
      </div>
      <div className="bottom">
        {data.slice(0, visibleProducts).map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
