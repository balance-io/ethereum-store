import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Layout from '../layout';

const StyledColumn = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

class OrderConfirmation extends Component {
  render = () => {
    const { product, shipping, status } = this.props;
    return (
      <Layout>
        <StyledColumn>
          <h1>{'Order Confirmed'}</h1>

          <p>{`Awaiting payment: ${status.txHash}`}</p>

          <StyledRow>
            <div>
              <h4>{'Product'}</h4>
              <p>{product.name}</p>
            </div>
            <div>
              <h4>{'Size'}</h4>
              <p>{product.size}</p>
            </div>
            <div>
              <h4>{'Price'}</h4>
              <p>{`${product.currency.symbol}${Number(product.price).toFixed(
                2
              )}`}</p>
            </div>
          </StyledRow>
          <StyledRow>
            <div>
              <h4>{'Name'}</h4>
              <p>{shipping.name}</p>
            </div>
            <div>
              <h4>{'Email'}</h4>
              <p>{shipping.email}</p>
            </div>
            <div>
              <h4>{'Address'}</h4>
              <p>{shipping.street}</p>
              <p>{`${shipping.city}, ${shipping.state}`}</p>
              <p>{shipping.zipCode}</p>
              <p>{shipping.country}</p>
            </div>
            <div>
              <h4>{'Phone Number'}</h4>
              <p>{shipping.phone}</p>
            </div>
          </StyledRow>
        </StyledColumn>
      </Layout>
    );
  };
}

OrderConfirmation.propTypes = {
  product: PropTypes.object.isRequired,
  shipping: PropTypes.object.isRequired,
  status: PropTypes.object.isRequired
};

const reduxProps = ({ order }) => ({
  product: order.product,
  shipping: order.shipping,
  status: order.status
});

export default connect(reduxProps, null)(OrderConfirmation);
