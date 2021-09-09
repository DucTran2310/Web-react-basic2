import Hero from 'components/HeroSection/Hero';
import Pricing from 'components/Pricing/Pricing';
import { homeObjThree } from 'pages/Data';
import React from 'react';

function Products() {
    return (
        <>
            <Hero {...homeObjThree}/>
            <Pricing />
        </>
    )
}

export default Products;