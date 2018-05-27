import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Card from '../components/Card';
import Button from '../components/Button';
import Loader from '../components/Loader';
import QRCodeDisplay from '../components/QRCodeDisplay';
import {
  walletConnectSubmitOrder,
  walletConnectModalInit,
  walletConnectClearFields
} from '../reducers/_walletconnect';
import { colors, transitions } from '../styles';

const StyledLightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  transition: ${transitions.base};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  background: rgba(${colors.dark}, 0.2);
`;

const StyledHitbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledColumn = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 582px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: ${({ expand }) => (expand ? '1' : '0')};
`;

class Modal extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.modalShow && this.props.modalShow) {
      this.props.walletConnectModalInit();
    } else if (prevProps.modalShow && !this.props.modalShow) {
      this.props.walletConnectClearFields();
    }
  }
  componentWillUnmount() {
    this.props.walletConnectClearFields();
  }
  render = () => {
    const { modalShow, fetching, qrcode } = this.props;
    const body = document.body || document.getElementsByTagName('body')[0];
    if (modalShow) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return (
      <StyledLightbox show={modalShow}>
        <StyledContainer>
          <StyledHitbox onClick={this.props.walletConnectClearFields} />
          <StyledColumn>
            {modalShow ? (
              <Card maxWidth={500} background="white">
                <StyledCardContainer>
                  <StyledSection expand>
                    {fetching && !qrcode ? (
                      <Loader color="dark" background="white" />
                    ) : qrcode ? (
                      <QRCodeDisplay data={qrcode} />
                    ) : (
                      <div />
                    )}
                  </StyledSection>
                  <StyledSection>
                    <Button onClick={this.props.walletConnectClearFields}>
                      {'Cancel'}
                    </Button>
                  </StyledSection>
                </StyledCardContainer>
              </Card>
            ) : (
              <div />
            )}
          </StyledColumn>
        </StyledContainer>
      </StyledLightbox>
    );
  };
}

Modal.propTypes = {
  walletConnectSubmitOrder: PropTypes.func.isRequired,
  walletConnectModalInit: PropTypes.func.isRequired,
  walletConnectClearFields: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  qrcode: PropTypes.string.isRequired
};

const reduxProps = ({ walletconnect, modal }) => ({
  modalShow: modal.modalShow,
  fetching: walletconnect.fetching,
  qrcode: walletconnect.qrcode
});

export default connect(reduxProps, {
  walletConnectSubmitOrder,
  walletConnectModalInit,
  walletConnectClearFields
})(Modal);
