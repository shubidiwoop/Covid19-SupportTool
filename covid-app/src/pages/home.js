import React from 'react';
import NavigationBar from './navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
/* import ControlledCarousel from './carousel'; */ 
import FooterPage from './footer';



const Home = () => {
    return (
        <div>
            <NavigationBar />

            <FooterPage />
        </div>
    );

}

export default Home;