import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fonts, colors } from '../styles';

const StyledButton = styled.button`
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

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
