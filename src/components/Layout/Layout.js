import React from 'react';
import './Layout.scss';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Kamil Budzik</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link href='https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,500&display=swap'
              rel='stylesheet' />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;