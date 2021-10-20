import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Services from './Components/Services/Services';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Profile from './Components/Profile/Profile';
import BookAppointment from './Components/BookAppointment/BookAppointment';
import NotFound from './Components/NotFound/NotFound';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  return (
      <AuthProvider>
         <div className="App">
            <Router>
                <Header />
                <Switch>
                   <Route exact path="/">
                        <Homepage></Homepage>
                   </Route>

                    <Route path="/home">
                        <Homepage></Homepage>
                    </Route>
                    <Route path="/services">
                        <Services></Services>
                    </Route>

                    {/* all private routing */}
                    <PrivateRoute path="/service/:serviceID">
                        <ServiceDetails></ServiceDetails>
                    </PrivateRoute>
                    <PrivateRoute path="/profile">
                        <Profile></Profile>
                    </PrivateRoute>
                    <PrivateRoute path="/bookAppointment">
                        <BookAppointment></BookAppointment>
                    </PrivateRoute>
                    
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/signup">
                        <Signup></Signup>
                    </Route>


                    {/* 404 page on invalid link */}
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
            <Footer></Footer>
         </div>
      </AuthProvider>
  );
}

export default App;
