import React from 'react';
import styled from 'styled-components';
import { tint } from 'polished';
import ArrowIMG from '../../assets/images/svg/arrow.svg';

const WhiteButtonWrapper = styled.button`
  color: ${(props) => props.theme.primaryColor};
  background-color: white;
  outline: none;
  border-color: transparent;
  font-size: 14px;
  padding: 14px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;

  &:hover {
    background-color: transparent;
    border: 1px solid white;
    color: white;
  }

  svg {
    vertical-align: middle;
    margin-left: 6px;
  }
`;

const WhiteButton = ({ children, arrow }) => {
  return (
    <WhiteButtonWrapper>
      {children}
      {arrow && (
        <span>
          <ArrowIMG />
        </span>
      )}
    </WhiteButtonWrapper>
  );
};

export default WhiteButton;
