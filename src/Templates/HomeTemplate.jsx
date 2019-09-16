import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Common/Components/Header/Header';
import Footer from '../Common/Components/Footer/Footer';
import './homeLayout.css'

const HomeLayout = ({ children, ...rest }) => {
    return (
      <Fragment>
        <Header />
        {children}
        <Footer />
      </Fragment>
    );
  };
  const HomeTemplate = ({ Component, ...rest }) => {
    return (
      <Route {...rest} render={props => {
          return (
            <HomeLayout>
              <Component {...props} />
            </HomeLayout>
          );
        }}
      />
    );
  };
  export default HomeTemplate;
  