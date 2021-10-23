import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/NotFound/NotFound';
import DentistDetails from './Pages/DentistDetails/DentistDetails';
import ConfirmBooking from './Pages/ConfirmBooking/ConfirmBooking';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/dentist/:id">
              <DentistDetails></DentistDetails>
            </PrivateRoute>
            <PrivateRoute path="/confirm">
              <ConfirmBooking></ConfirmBooking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
