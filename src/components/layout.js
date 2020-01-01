import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
