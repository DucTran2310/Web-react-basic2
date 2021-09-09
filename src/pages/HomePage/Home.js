import Hero from 'components/HeroSection/Hero';
import Pricing from 'components/Pricing/Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from 'pages/Data';
import React from 'react';

function Home() {
    return (
        <>
            <Hero {...homeObjOne}/>
            <Hero {...homeObjThree}/>
            <Hero {...homeObjTwo}/>
            <Pricing />
            <Hero {...homeObjFour}/>
        </>
    )
}

export default Home;
