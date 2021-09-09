import Hero from 'components/HeroSection/Hero';
import Pricing from 'components/Pricing/Pricing';
import { homeObjOne } from 'pages/Data';
import React from 'react';

function Services() {
    return (
        <>
            <Pricing />
            <Hero {...homeObjOne}/>
        </>
    )
}

export default Services;