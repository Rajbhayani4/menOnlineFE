import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomeScreen from './components/HomePage/HomeScreen';
import ServiceListPage from './components/Collections/ServiceListPage';
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';
import 'antd/dist/antd.css';
import './style/common.scss';
import './App.css';
import './style/responsive.css';
import UserProfile from './components/Userprofile/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='' element={<HomeScreen />} />
        <Route path='/service-list' element={<ServiceListPage />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
