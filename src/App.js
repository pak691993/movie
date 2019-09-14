import React, { Fragment } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
//layout
import HomeTemplate from './Templates/HomeTemplate';
import AdminTemplate from './Templates/AdminTemplate';
//pages
import HomePage from './Page/Home/HomePage/HomePage';
import BookingPage from './Page/Home/BookingPage/BookingPage';
import DetailMovies from './Page/Home/DetailMovies/DetailMovies';
import InfoPage from './Page/Home/InfoPage/InfoPage';

import AdminPage from './Page/Admin/AdminPage/AdminPage'
import './App.css';
import AdminLoginPage from './Page/Admin/AdminLoginPage/AdminLoginPage';


function App() {
    return (
        <BrowserRouter >
            <Fragment >
                <Switch >
                    <HomeTemplate exact path='/detailmovies/:maPhim' Component={DetailMovies} />
                    <HomeTemplate exact path='/thongTinCaNhan' Component={InfoPage} />
                    <HomeTemplate exact path='/booking/:maLichChieu' Component={BookingPage} />
                    <HomeTemplate exact path='/' Component={HomePage} />
                    <HomeTemplate exact path='/login' Component={AdminLoginPage} />
                    <AdminTemplate exact path='/admin' Component={AdminPage} />
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
}

export default App;