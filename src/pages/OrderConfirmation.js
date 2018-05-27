import React, { Component } from 'react';
import styled from 'styled-components';
import Layout from '../layout';

const SFlexCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

class OrderConfirmation extends Component {
  render = () => {
    return (
      <Layout>
        <SFlexCenter>
          <h1>{'OrderConfirmation'}</h1>
        </SFlexCenter>
      </Layout>
    );
  };
}

export default OrderConfirmation;
