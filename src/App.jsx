import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:'/',
                element: <Body />
            },
            {
                path:"/about",
                element: <About />,
            },
            {
                path:"/contact",
                element: <Contact />,
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)
