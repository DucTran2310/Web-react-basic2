import Hero from 'components/HeroSection/Hero';
import { homeObjFour } from 'pages/Data';
import React from 'react';

function SignUp() {
    return (
        <>
            <Hero {...homeObjFour}/>
        </>
    )
}

export default SignUp;