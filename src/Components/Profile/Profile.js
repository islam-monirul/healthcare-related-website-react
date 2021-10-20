import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Profile.css';

const Profile = () => {
     const {user} = useAuth();

     return (
          <section className="profile">
               <h4 className="text-center">Welcome <span className="text-primary">{user?.displayName}</span></h4>
               <p className="text-center">
                    We welcome you to the best dental virtual healthcare website. <br />
                    Now as you have logged in you have access to all the features of this website. <br /> 
                    You can now visit the service details pages, book appointments page and other stuffs also.
               </p>
               <div>
                    <Button className="d-block mx-auto">
                         <Link to="/Services">Check out our Services</Link>
                    </Button>
               </div>
          </section>
     );
};

export default Profile;