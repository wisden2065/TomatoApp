import React, { useContext } from 'react'
import './FoodDisplayContainer.css'
import { StoreContext } from '../../context/storeContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplayContainer = ({category}) => {

  // consume the foodList provided by the Provider function
  const { food_list } = useContext(StoreContext);

//   make a loop to filer the food filtered based on category based on the current state
  return (
    <div className='food-wrapper' id='food-wrapper'>
        <h2>Great Dishes near you</h2>    
        <div className='food-container'>
           {food_list.map((food, index)=> <FoodItem key={index} id={food.id}  name={food.name} image={food.image} price={food.price} description={food.description} category={food.category} className="food-item" />

           )}
        </div>
    </div>
  )
}

export default FoodDisplayContainer
