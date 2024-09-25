import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

// component for food container or div
const FoodItem = ({id, name, image, price, description,  category}) => {
  return (
    <div className='food-item' id={id}>
        <div className="foodImg-container">
            <img src={image} alt="" />
            <div addBtn>
              
            </div>
        </div>
        <div className="foodItem-info">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="foodItem-description">
            {description}
        </p>
        <p className='foodItem-price'>price: {price}</p>
        <button>Order now</button>
    </div>
  )
}

export default FoodItem
