import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <h1>Bhai Biriyani</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    return (
        <div className='res-card' style={{backgroundColor:'#F0F0F0'}}>
            <img id='res-card-img' src={props.url} />
            <h3>{props.resName}</h3>
            <div className='res-card-desc'>
                <p>{props.location}</p>
                <p>₹{props.price}</p>
            </div>
            <div className='rating'>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <p id='res-card-time'>{props.time}Min</p>
        </div>
    );
};

const resObject = {
    "info": {
      "id": "73665",
      "name": "Bismillah Biryani & Fast food",
      "cloudinaryImageId": "biztrxunzi2lklnrzgjf",
      "locality": "Perambur",
      "areaName": "Kolathur",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Tandoor",
        "Chinese",
        "Biryani",
        "Indian"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "73665",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 9000
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 9000
      },
      "parentId": "13976",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 8.1,
        "serviceability": "SERVICEABLE",
        "slaString": "50 mins",
        "lastMileTravelString": "8.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-10 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹800",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-d22a4275-5314-49f9-8315-bdf95c787295"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bismillah-biryani-and-fast-food-perambur-kolathur-chennai-73665",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                <input placeholder='search'/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='res-container'>
                <RestaurantCard resName='Masthan Biriyani' location='Hyderabad' price='240.00' time='45' url='https://wallpaperaccess.com/full/4622433.jpg'/>
                <RestaurantCard resName='Border Parotta' location='Tenkasi' price='90.00' time='30' url='https://wallpapercave.com/dwp1x/wp9228906.jpg'/>
                <RestaurantCard resName='BBQ Nation' location='Erode' price='300.00' time='60' url='https://e0.pxfuel.com/wallpapers/308/845/desktop-wallpaper-bbq-chicken-grill-chicken.jpg'/>
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)
