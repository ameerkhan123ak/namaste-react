import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)
