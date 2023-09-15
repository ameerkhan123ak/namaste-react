import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searctText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=> console.log('use effect called'))



  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    
    // console.log(json);
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="search">
        <input 
            placeholder="search" 
            id="search-input" 
            value={searctText} 
            onChange={ (e) => setSearchText(e.target.value) }
        />

        <button id="search-btn" 
        onClick={ () => {
            const filteredRestaurants = listOfRestaurants.filter((restaurant) => (restaurant.info.name.toString().toLowerCase().includes(searctText.toLowerCase())))
            setFilteredRestaurant(filteredRestaurants);
        }}>

        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        
      </div>
      <div className="top-rated-container">
        <button
          id="top-rated-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Filter Top Rated Restaurant
          <i class="fa-solid fa-filter"></i>
        </button>
      </div>
      <h2 id="top-rated-h2">Top Rated Restaurants in Chennai</h2>
      
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
