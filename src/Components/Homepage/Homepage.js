import React from 'react';
import About from '../About/About';
import HeroPart from '../HeroPart/HeroPart';
import Services from '../Services/Services';

const Homepage = () => {
     return (
          <div>
               <HeroPart></HeroPart>
               <About></About>
               <Services></Services>
          </div>
     );
};

export default Homepage;