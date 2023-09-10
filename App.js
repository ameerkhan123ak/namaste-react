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

const resList = [
  {
    info: {
      id: "54852",
      name: "SS Hyderabad Briyani",
      cloudinaryImageId: "bwkfac2r3bpphgfm7rh9",
      locality: "Parrys Corner",
      areaName: "George Town",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Chinese"
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "54852",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 4400
      },
      parentId: "4824",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-09-10 23:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: "seo-data-d22a4275-5314-49f9-8315-bdf95c787295"
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/ss-hyderabad-briyani-parrys-corner-george-town-chennai-54852",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    imgURL: "https://wallpaperaccess.com/full/4622433.jpg"
  },
  {
    info: {
      id: "77641",
      name: "A1 Ambur Biriyani",
      cloudinaryImageId: "vciivwzggkt7tmemz6a6",
      locality: "Chennai",
      areaName: "Balavinayagar Nagar",
      costForTwo: "₹100 for two",
      cuisines: [
        "Biryani",
        "Chinese"
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "77641",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7500
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 7500
      },
      parentId: "29456",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 7.9,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "7.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-09-11 01:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: "seo-data-d22a4275-5314-49f9-8315-bdf95c787295"
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/a1-ambur-biriyani-balavinayagar-nagar-chennai-77641",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "14096",
      name: "Sangeetha Veg Restaurant",
      cloudinaryImageId: "oodghmivnc6bxnbrvzzw",
      locality: "Gandhi Irwin Rd",
      areaName: "Egmore",
      costForTwo: "₹150 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "South Indian"
      ],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "14096",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3500
      },
      parentId: "1260",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-09-10 22:45:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: "seo-data-d22a4275-5314-49f9-8315-bdf95c787295"
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sangeetha-veg-restaurant-gandhi-irwin-rd-egmore-chennai-14096",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "73665",
      name: "Bismillah Biryani & Fast food",
      cloudinaryImageId: "biztrxunzi2lklnrzgjf",
      locality: "Perambur",
      areaName: "Kolathur",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tandoor",
        "Chinese",
        "Biryani",
        "Indian"
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "73665",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 9000
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 9000
      },
      parentId: "13976",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "50 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-09-10 23:30:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹800",
        discountTag: "FLAT DEAL"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: "seo-data-d22a4275-5314-49f9-8315-bdf95c787295"
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/bismillah-biryani-and-fast-food-perambur-kolathur-chennai-73665",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "18341",
      name: "Doveton Cafe",
      cloudinaryImageId: "dkds8g7ak8rneieejko6",
      locality: "Purasavakkam High Road",
      areaName: "Purasaiwakkam",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "South Indian",
        "Indian",
        "Tandoor"
      ],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "18341",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3500
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3500
      },
      parentId: "11076",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-09-10 23:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: "seo-data-d22a4275-5314-49f9-8315-bdf95c787295"
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/doveton-cafe-purasavakkam-high-road-purasaiwakkam-chennai-18341",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "11479",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Express Avenue",
      areaName: "Thousand Lights",
      costForTwo: "₹350 for two",
      cuisines: [
        "Burgers",
        "American"
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "11479",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 4400
      },
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-09-10 23:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: "seo-data-d22a4275-5314-49f9-8315-bdf95c787295"
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-express-avenue-thousand-lights-chennai-11479",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "262948",
      name: "Perambur Sri Srinivasa (Bhavan)",
      cloudinaryImageId: "bogj3f009rjyo7b5omgx",
      locality: "Sembium",
      areaName: "Chennai",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "North Indian"
      ],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "262948",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 5400
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 5400
      },
      parentId: "5939",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "37 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-09-10 22:15:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹65"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: "seo-data-d22a4275-5314-49f9-8315-bdf95c787295"
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/perambur-sri-srinivasa-bhavan-sembium-chennai-chennai-262948",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    info: {
      id: "381704",
      name: "Sree Akshayam",
      cloudinaryImageId: "pigur7jszfduqsrqzvjk",
      locality: "Cp Ramasamy Road",
      areaName: "Alwarpet",
      costForTwo: "₹400 for two",
      cuisines: [
        "South Indian",
        "North Indian",
        "Chinese",
        "Beverages"
      ],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "381704",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 7500
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 7500
      },
      parentId: "16899",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 7,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "7.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-09-10 23:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50"
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {
      context: "seo-data-d22a4275-5314-49f9-8315-bdf95c787295"
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sree-akshayam-cp-ramasamy-road-alwarpet-chennai-381704",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const RestaurantCard = (props) => {

    const { resData } = props;
    return (
        <div className='res-card' style={{backgroundColor:'#F0F0F0'}}>
            <img id='res-card-img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <div className='res-card-desc'>
                <p>{resData.info.locality}</p>
                <p>₹{resData.info.feeDetails.totalFee/10.00}</p>
            </div>
            <div className='res-card-footer'>
            <p id='rating'>{resData.info.avgRating} <i class="fa-solid fa-star"></i></p>
            <p id='res-card-time'>{resData.info.sla.deliveryTime} Min</p>
            </div>
        </div>
    );
};


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
