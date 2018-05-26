import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../layout';
import tshirtPreview from '../assets/tshirt-preview.jpg';
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
  cursor: pointer;
  padding: 14px 8px;
  border-radius: 10px;
  font-size: ${fonts.size.medium};
  width: 100px;
  color: rgb(${colors.white});
  background-color: rgb(${colors.blue});
  &:hover {
    opacity: 0.7;
  }
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
              Pay
            </SPayWithWalletConnect>
          </SActions>
        </SDetails>
      </SFlex>
    </Layout>
  );
}

export default Homepage;
