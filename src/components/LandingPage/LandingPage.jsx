import React from 'react'
import './LandingPage.css'
import { assets } from '../../assets/assets'
const LandingPage = () => {
  return (
    <div className='header'>
        <div className='header-backgroundImg'>
          <img src={assets.header_img} alt="" />
        </div>
        <div className="header-contents">
            <h3>African Home made Delicacy</h3>
            <p>Discover the rich and diverse flavors of African cuisine. From the spicy delicacies of West Africa to the savory dishes of East Africa, our app brings you authentic recipes and fresh ingredients that celebrate the vibrant culinary heritage of the continent. Satisfy your cravings and explore new tastes, all from the comfort of your home.</p>
            <button>Order Now</button>
        </div>
        
    </div>
  )
}

export default LandingPage
