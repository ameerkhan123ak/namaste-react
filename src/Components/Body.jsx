import React from "react";
import resList from '../Files/file.json'
import RestaurantCard from "./RestaurantCard";
import TopRated from "./TopRated";

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <input placeholder='search'/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <TopRated />
            <div className='res-container'>
                {
                  resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
};

export default Body;