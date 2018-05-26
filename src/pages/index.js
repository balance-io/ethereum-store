import React from 'react';
import styled from 'styled-components';
import Layout from '../layout';
import tshirtPreview from '../assets/tshirt-preview.jpg';
import { fonts, colors } from '../styles';

const SFlex = styled.div`
  width: 100%;
  display: flex;
`;

const SPreview = styled.div`
  width: 70%;
  & img {
    width: 100%;
  }
`;

const SDetails = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const STitle = styled.h1`
  font-size: ${fonts.size.h2};
`;

const SDescription = styled.p`
  color: rgb(${colors.grey});
`;

const SSizes = styled.ul`
  display: flex;
  justify-content: space-between;
  & li {
    margin: 6px;
  }
`;

const SActions = styled.div`
  display: flex;
`;

const SPayWithWalletConnect = styled.button`
  padding: 14px 8px;
  border-radius: 8px;
  width: 100px;
  color: rgb(${colors.white});
  background-color: rgb(${colors.blue});
`;

const Homepage = () => (
  <Layout>
    <SFlex>
      <SPreview>
        <img src={tshirtPreview} alt="Ethereum T-Shirt" />
      </SPreview>
      <SDetails>
        <STitle>Ethereum T-Shirt</STitle>
        <SDescription>
          The perfect t-shirt for buidlers on Ethereum
        </SDescription>
        <SSizes>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
        </SSizes>
        <SActions>
          <SPayWithWalletConnect onClick={() => {}}>Pay</SPayWithWalletConnect>
        </SActions>
      </SDetails>
    </SFlex>
  </Layout>
);

export default Homepage;
