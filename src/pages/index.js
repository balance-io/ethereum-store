import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../layout';
import tshirtPreview from '../assets/tshirt-preview.jpg';
import walletConnectLogo from '../assets/walletconnect-logo.svg';
import { fonts, colors } from '../styles';

const SFlex = styled.div`
  width: 100%;
  display: flex;
  padding: 40px 0;
`;

const SPreview = styled.div`
  width: 70%;
  padding-right: 40px;
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
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: rgb(${colors.grey});
  padding: 20px 0;
`;

const SSizes = styled.div`
  width: 50%;
  margin: 0.5em 0;
  & p {
    margin-left: 8px;
  }
  & ul {
    display: flex;
    justify-content: space-between;
  }
`;

const SSizeOption = styled.li`
  cursor: pointer;
  margin: 4px;
  padding: 4px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ selected }) =>
    selected ? `rgb(${colors.dark})` : 'transparent'};
  &:hover {
    opacity: 0.7;
  }
`;

const SActions = styled.div`
  display: flex;
`;

const SPayWithWalletConnect = styled.button`
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  padding: 0px 0 4px 24px;
  border-radius: 10px;
  font-family: "SF Pro Text";
  letter-spacing: -0.63px;
  font-size: ${fonts.size.h4};
  font-weight: 600;
  width: 300px;
  height: 53px;
  box-shadow: 0 4px 6px 0 rgba(50,50,93,0.11), 0 1px 3px 0 rgba(0,0,0,0.08), inset 0 0 1px 0 rgba(0,0,0,0.06);
  color: rgb(${colors.white});
  background-color: rgb(${colors.blue});
  transition: 0.15s ease;
  will-change: transform;
  &:hover {
    box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
    background-color: #3388FF;
  }
  &:active {
    box-shadow: 0 4px 6px 0 rgba(50,50,93,0.11), 0 1px 3px 0 rgba(0,0,0,0.08), inset 0 0 1px 0 rgba(0,0,0,0.06);
    transform: translateY(1px);
    background-color: #227AF5;
  }
`;

const SWalletConnectLogo = styled.div`
  position: absolute;
  top: 16px;
  left: 110px;
  width: 30px;
  height: 18px;
  background: url(${walletConnectLogo});
`;

class Homepage extends Component {
  state = {
    sizeOptions: ['S', 'M', 'L', 'XL'],
    selectedSize: 'M'
  };
  render = () => (
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
            <p>Size</p>
            <ul>
              {this.state.sizeOptions.map(option => (
                <SSizeOption
                  selected={this.state.selectedSize === option}
                  onClick={() => this.setState({ selectedSize: option })}
                >
                  {option}
                </SSizeOption>
              ))}
            </ul>
          </SSizes>
          <SActions>
            <SPayWithWalletConnect onClick={() => {}}>
              <SWalletConnectLogo />Pay
            </SPayWithWalletConnect>
          </SActions>
        </SDetails>
      </SFlex>
    </Layout>
  );
}

export default Homepage;
