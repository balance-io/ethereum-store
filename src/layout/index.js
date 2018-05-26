import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../components/Modal';
import logo from '../assets/ethereum-logo.png';

const headerSize = 135;

const SWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

const SHeader = styled.header`
  display: flex;
  max-width: 1000px;
  width: 100%;
  height: ${headerSize}px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const SLogo = styled.div`
  height: 50px;
  & img {
    height: 100%;
  }
`;

const SMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & li {
    margin-left: 16px;
  }
`;

const SContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: calc(100% - ${headerSize}px);
`;

const menu = [
  { title: 'Hoodies', pathname: '/hoodies' },
  { title: 'T-Shirts', pathname: '/tshirts' },
  { title: 'Caps', pathname: '/caps' }
];

const Layout = ({ children, showModal, toggleModal, ...props }) => (
  <SWrapper {...props}>
    <SHeader>
      <SLogo>
        <img src={logo} alt="logo" />
      </SLogo>
      <SMenu>{menu.map(item => <li key={item.title}>{item.title}</li>)}</SMenu>
    </SHeader>
    <SContent>{children}</SContent>
    <Modal showModal={showModal} toggleModal={toggleModal} />
  </SWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default Layout;
