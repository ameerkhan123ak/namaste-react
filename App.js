import React from 'react';
import ReactDOM from 'react-dom/client';
import resList from './file.json'
import Footer from './Components/Footer';
import Header from './Components/Header';
import RestaurantCard from './Components/RestaurantCard';
import Body from './Components/Body';

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
