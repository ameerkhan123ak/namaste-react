import React from "react";
import RestaurantCard from "./RestaurantCard";
import { listOfRestaurant } from "../utils/listOfRestaurants";
import { useState, useEffect } from "react";

let listOfRestaurantsData = listOfRestaurant;

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    listOfRestaurantsData
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };

  return (
    <div className="body">
      <div className="search">
        <input placeholder="search" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="top-rated-container">
        <button
          id="top-rated-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Filter Top Rated Restaurant
          <i class="fa-solid fa-filter"></i>
        </button>
      </div>
      <h2 id="top-rated-h2">Top Rated Restaurants in Chennai</h2>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
