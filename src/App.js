
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Home from './components/Home/Home';
import Purchase from './components/Purchase/Purchase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Explore from './components/Explore/Explore';
import Notfound from './components/NotFound/Notfound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path="/shippping/:servicesId">
            <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/*">
              <Notfound></Notfound>
            </Route>
            {/* <Route path="/footer">
              <Footer></Footer>
            </Route> */}
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
