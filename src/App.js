import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home.';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Package from './components/package/Package';
import Footer from './components/Footer';
import Gallary from './components/Gallary/Gallary';
import CateringGallary from './components/Gallary/CateringGallary/CateringGallary';
import Photography from './components/Gallary/Photography/Photography';
import Decor from './components/Gallary/Decor/Decor';
import Wedding from './components/Gallary/Wedding/Wedding';
import Event from './components/Gallary/Event/Event';
import Birthday from './components/Gallary/Birthday/Birthday';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import RouteLinks from './components/private/RouteLinks';
import Dashboard from './components/clientDashoard/Dashboard';
import Services from './components/Services/Services';
import ServicesForm from './components/shopkeeper/Services/ServicesForm';
import ServicesTypes from './components/shopkeeper/Services/ServicesTypes';
import Customize from './components/customize/Customize';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
           <RouteLinks exact path='/login' component={Login} />
           <RouteLinks exact path='/register' component={Register} />
           <Route exact path='/dashboard' component={Dashboard} />
           <Route exact path='/' component={Home} />
           <Route exact path='/about' component={About} />
           <Route exact path='/contact' component={ContactUs} />
           <Route exact path='/package' component={Package} />
           <Route exact path='/services' component={Services} />
           <Route exact path='/customize' component={Customize} />
           <Route exact path='/services/types' component={ServicesTypes} />
           <Route exact path='/services/add' component={ServicesForm} />
           <Route exact path='/gallary' component={Gallary} />
           <Route exact path='/catering_gallary' component={CateringGallary} />
           <Route exact path='/photography_gallary' component={Photography} />
           <Route exact path='/decor_gallary' component={Decor} />
           <Route exact path='/wedding_gallary' component={Wedding} />
           <Route exact path='/event_gallary' component={Event} />
           <Route exact path='/birthday_gallary' component={Birthday} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
