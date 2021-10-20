import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
     // destructuring
     const {serviceID} = useParams();

     // state declare
     const [service, setService] = useState({});

     // using useEffect
     useEffect( () => {
          fetch('/data.json')
               .then(res => res.json())
                    .then(data => findService(data))
     },[]);

     // desired product finding function
     const findService = services => {
          const desiredProduct = services.find( service => service.id === parseInt(serviceID));
          setService(desiredProduct);
     }

     console.log(service);
     

     
     

     return (
          <div>
               <h1>Service Details {serviceID}</h1>
          </div>
     );
};

export default ServiceDetails;