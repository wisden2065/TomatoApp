import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu'>
        <h1>Explore our Menu</h1>
        <p className='exploreMenu-text'>Explore some tasty home made food</p>
        <div className="exploreMenu-list">
            {/* render the products with map method */}
            {
                menu_list.map((menu, index)=>{                //"All"      "All"=== "salad"         
                    return (<div  onClick={()=>{setCategory(prevMenu=>(prevMenu === menu.menu_name? "All": menu.menu_name)); console.log(category);
                    }} key={index} className='foodContainer'>
                                <img src={menu.menu_image} alt="" className={category === menu.menu_name? "active": ""} />
                                <p>{menu.menu_name}</p>
                            </div>)
                })
            }
        </div>
        <hr />
        
    </div>
  )
}

export default ExploreMenu
