
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

//toast
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

//firebase
import firebase from 'firebase/app';
import 'firebase/auth'

//components
import Home from './pages/Home';
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import PageNotFound from './pages/PageNotFound'
import { useState } from 'react';

import {UserContext}  from './context/UserContext'
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './config/firebaseConig'
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () =>{
  const [user,setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user,setUser }}>
        <Header />
        <Switch>
          <Route path="/" exact  component={Home}/>
          <Route path="/signup" exact  component={Signup}/>
          <Route path="/signin" exact  component={Signin}/>
          <Route path="/*" exact  component={PageNotFound}/>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
