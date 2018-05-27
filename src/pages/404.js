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

class NotFound extends Component {
  render = () => {
    return (
      <Layout>
        <SFlexCenter>
          <h1>{'404 Page Not Found'}</h1>
        </SFlexCenter>
      </Layout>
    );
  };
}

export default NotFound;
