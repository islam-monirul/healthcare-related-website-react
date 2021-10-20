import React from 'react';
import About from '../About/About';
import Clients from '../Clients/Clients';
import HeroPart from '../HeroPart/HeroPart';
import Services from '../Services/Services';

const Homepage = () => {
     return (
          <div>
               <HeroPart></HeroPart>
               <About></About>
               <Services></Services>
               <Clients></Clients>
          </div>
     );
};

export default Homepage;