import React from "react";
import { useEffect, useState } from "react";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);;

    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=14096&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json)
        setResInfo(json)
    }

    // const {name, city} = resInfo?.data?.cards[0]?.card?.card?.info;
    return resInfo === null ? <RestaurantMenuShimmer /> :  (
        <div className="menu">
            <div className="upper-menu-container-1">
                <p>Home / {resInfo?.data?.cards[0]?.card?.card?.info.city}  / {resInfo?.data?.cards[0]?.card?.card?.info.name}</p>
                <div className="icons">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="menu-container-main">
                <div className="menu-container-main-left">
                  <h2>{resInfo?.data?.cards[0]?.card?.card?.info.name}</h2>
                  <p>{resInfo?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
                  <p>{resInfo?.data?.cards[0]?.card?.card?.info.areaName}, {resInfo?.data?.cards[0]?.card?.card?.info?.sla?.lastMileTravel} km</p>
                  <p style={{fontSize:'18px'}}>
                  <i class="fa-solid fa-bicycle" style={{paddingRight:'8px'}}></i>
                  {resInfo?.data?.cards[0]?.card?.card?.info?.feeDetails?.message}
                  </p>
                </div>
                <div className="menu-container-main-right">
                    <div className="another-main-right">
                    <p className="main-right-p">
                        <i class="fa-solid fa-star"></i>
                        {resInfo?.data?.cards[0]?.card?.card?.info?.avgRating}
                    </p>
                    <p>{resInfo?.data?.cards[0]?.card?.card?.info?.totalRatingsString}</p>
                    </div>
                </div>
            </div>
            <div className="time-container">
                    <div className="time-container-left">
                    <p>
                    <i class="fa-solid fa-clock" style={{paddingRight:'4px'}}></i>
                    {resInfo?.data?.cards[0]?.card?.card?.info?.sla.deliveryTime} Mins
                    </p>
                    <p>
                    {resInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}                
                    </p>
                    </div>
                    <div className="timer-container-right">
                        <button className="order-btn">Order now</button>
                    </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;