import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SContent = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: calc(100% - 70px);
`;

const Layout = ({ children, ...props }) => (
  <SWrapper {...props}>
    <Header />
    <SContent>{children}</SContent>
  </SWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
