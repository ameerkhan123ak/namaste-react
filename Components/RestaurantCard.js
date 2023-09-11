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

export default RestaurantCard;