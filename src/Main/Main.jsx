import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from '../Components/Shared/Header/Header';
import Footer from '../Components/Shared/Footer/Footer';
import Category from '../Components/Pages/Category';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;