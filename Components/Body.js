import React from "react";
import resList from '../file.json'
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <input placeholder='search'/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='res-container'>
                {
                  resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
};

export default Body;