import logo from './logo.svg';
import './App.css';
import About from './Pages/Home/About/About';
import Header from './Pages/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import DentistDetails from './Pages/DentistDetails/DentistDetails';
import ConfirmBooking from './Pages/ConfirmBooking/ConfirmBooking';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/dentist/:id">
            <DentistDetails></DentistDetails>
          </Route>
          <Route path="/confirm">
            <ConfirmBooking></ConfirmBooking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
