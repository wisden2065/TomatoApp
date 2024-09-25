import React, { useState } from 'react';
import './Home.css';
import LandingPage from '../../components/LandingPage/LandingPage.jsx'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import FoodDisplayContainer from '../../components/FoodDisplayContainer/FoodDisplayContainer.jsx';
const Home = () => {
  
  const [category, setCategory] = useState("All");

  
  return (
    <div>
    <LandingPage />  
    {/* the current state of the category and the setterFunction passed as props to this component to allow change of state */}
    <ExploreMenu category={category} setCategory={setCategory} />  
    {/* when the state is changed from the ExploreMenu we will change what food should be displayed based on the state of the category */}
    <FoodDisplayContainer category={category} />   
    </div>
  )
}

export default Home
