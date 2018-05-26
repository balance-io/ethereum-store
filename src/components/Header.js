import React from 'react';
import styled from 'styled-components';
import logo from '../assets/ethereum-logo.png';

const SHeader = styled.header`
  display: flex;
  max-width: 1000px;
  width: 100%;
  height: 70px;
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

const menu = [
  { title: 'Hoodies', pathname: '/hoodies' },
  { title: 'T-Shirts', pathname: '/t-shirts' },
  { title: 'Checkout', pathname: '/checkout' }
];

const Header = () => (
  <SHeader>
    <SLogo>
      <img src={logo} alt="logo" />
    </SLogo>
    <SMenu>{menu.map(item => <li key={item.title}>{item.title}</li>)}</SMenu>
  </SHeader>
);

export default Header;
