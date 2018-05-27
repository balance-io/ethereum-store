import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Layout from '../layout';
import tshirtPreview from '../assets/tshirt-preview.jpg';
import walletConnectLogo from '../assets/walletconnect-logo.svg';
import { modalOpen } from '../reducers/_modal';
import { orderUpdateProduct } from '../reducers/_order';
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

const SPrice = styled.p`
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.size.xlarge};
  font-family: ${fonts.family.SFMono};
`;

const SActions = styled.div`
  display: flex;
`;

const SPayWithWalletConnect = styled.button`
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: ${fonts.family.SFProText};
  letter-spacing: -0.63px;
  font-size: ${fonts.size.h4};
  font-weight: 600;
  width: 300px;
  height: 53px;
  box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
    0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
  color: rgb(${colors.white});
  background-color: rgb(${colors.blue});
  transition: 0.15s ease;
  will-change: transform;
  & span {
    margin-left: 6px;
  }
  &:hover {
    box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
      0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
    transform: translateY(-1px);
    background-color: #3388ff;
  }
  &:active {
    box-shadow: 0 4px 6px 0 rgba(50, 50, 93, 0.11),
      0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06);
    transform: translateY(1px);
    background-color: #227af5;
  }
`;

const SWalletConnectLogo = styled.div`
  width: 30px;
  height: 18px;
  background: url(${walletConnectLogo});
`;

class Homepage extends Component {
  state = {
    sizeOptions: ['S', 'M', 'L', 'XL']
  };
  render = () => {
    const { sizeOptions } = this.state;
    const { product, modalOpen, orderUpdateProduct } = this.props;
    return (
      <Layout>
        <SFlex>
          <SPreview>
            <img src={tshirtPreview} alt="Ethereum T-Shirt" />
          </SPreview>
          <SDetails>
            <STitle>{product.name}</STitle>
            <SDescription>{product.description}</SDescription>
            <SSizes>
              <p>{'Select Size'}</p>
              <ul>
                {sizeOptions.map(option => (
                  <SSizeOption
                    key={option}
                    selected={product.size === option}
                    onClick={() => orderUpdateProduct({ size: option })}
                  >
                    {option}
                  </SSizeOption>
                ))}
              </ul>
            </SSizes>
            <SPrice>{`${product.currency.symbol}${Number(product.price).toFixed(
              2
            )}`}</SPrice>
            <SActions>
              <SPayWithWalletConnect onClick={() => modalOpen({ product })}>
                <SWalletConnectLogo />
                <span>Pay</span>
              </SPayWithWalletConnect>
            </SActions>
          </SDetails>
        </SFlex>
      </Layout>
    );
  };
}

Homepage.propTypes = {
  product: PropTypes.object.isRequired,
  orderUpdateProduct: PropTypes.func.isRequired,
  modalOpen: PropTypes.func.isRequired
};

const reduxProps = ({ order }) => ({
  product: order.product
});

export default connect(reduxProps, {
  orderUpdateProduct,
  modalOpen
})(Homepage);
