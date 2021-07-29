import React from 'react';
import styled from 'styled-components';
import { tint } from 'polished';
import arrowIMG from '../../assets/images/svg/arrow.svg';

const PrimaryButtonWrapper = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  outline: none;
  border-color: transparent;
  font-size: 14px;
  padding: 14px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;

  &:hover {
    background-color: ${(props) => tint(0.2, props.theme.primaryColor)};
  }

  img {
    vertical-align: middle;
    margin-left: 6px;
  }
`;

const PrimaryButton = ({ children, arrow }) => {
  return (
    <PrimaryButtonWrapper>
      {children} {arrow && <img src={arrowIMG} />}
    </PrimaryButtonWrapper>
  );
};

export default PrimaryButton;
