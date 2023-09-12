import React from "react";
import RestaurantCard from "./RestaurantCard";
import { listOfRestaurant } from '../utils/listOfRestaurants'
import { useState  } from "react";

let listOfRestaurants = listOfRestaurant;

const Body = () => {

    return (
        <div className='body'>
            <div className='search'>
                <input placeholder='search'/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="top-rated-container">
                <button id="top-rated-btn" onClick={
                    () => {
                        listOfRestaurants =  listOfRestaurants.filter(res => res.info.avgRating > 4)
                        console.log(listOfRestaurants)
                    }
                }>
                    Filter Top Rated Restaurant
                    <i class="fa-solid fa-filter"></i>
                </button>
            </div>
            <div className='res-container'>
                {
                  listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
};

export default Body;