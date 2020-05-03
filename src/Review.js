import React from 'react';
import logo from './logo.svg';
import './App.css';

function ReviewItem() {
    const user = [
      {
        "id" : 1,
        "name" : "claudia",
        "review" : "cocok banget buat invest tauu"
      },
      {
        "id" : 2,
        "name" : "benedict",
        "review" : "mantap lah pokonya"
      },
      {
        "id" : 3,
        "name" : "cloi",
        "review" : "uhuy banget"
      }
    ];
  
    const listReview = user.map((item) => 
      <div key={item.id} className="item">
        <img src="https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?cs=srgb&dl=woman-in-black-tank-top-wearing-eyeglasses-2100063.jpg&fm=jpg" />
        <div className="user">
          <h3>{item.name}</h3>
          <p>{item.review}</p>
        </div>
      </div>
    );
  
    return (
      <div className="review-box">
        <h2>Reviews</h2>
        {listReview}
      </div>
    );
  }

export default ReviewItem;