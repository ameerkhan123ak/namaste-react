import React from 'react';
import ReactDOM from 'react-dom/client';
import resList from './file.json'
import Footer from './Components/Footer';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <h1 id='logo'>Bhai Biriyani</h1>
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


console.log(resList);

const RestaurantCard = (props) => {

    const { resData } = props;
    const {name, avgRating, deliveryTime, locality} = resData?.info;
    const {totalFee} = resData?.info?.feeDetails;
    console.log(name+" "+totalFee);
    return (
        <div className='res-card' style={{backgroundColor:'#F0F0F0'}}>
            
            <img id='res-card-img' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
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
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)
