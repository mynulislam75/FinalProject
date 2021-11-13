import React from 'react';
import { Alert } from 'react-bootstrap';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
import Extra from '../Extra/Extra';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import TopSlide from '../TopSlide/TopSlide';


const Home = () => {
    return (
        <div>
            <TopSlide></TopSlide>
            <Services></Services>
            <AllReviews></AllReviews>
            <Extra></Extra>
            <Footer></Footer>
        </div>
    );
};

export default Home;