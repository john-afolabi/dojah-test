import React from 'react';
import styled from 'styled-components';
import { tint } from 'polished';
import ArrowIMG from '../../assets/images/svg/arrow.svg';

const TransparentButtonWrapper = styled.button`
  background-color: transparent;
  color: white;
  outline: none;
  border: 1px solid white;
  font-size: 14px;
  padding: 14px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;

  &:hover {
    background-color: white;
    border: none;
    color: ${(props) => props.theme.primaryColor};
  }

  svg {
    vertical-align: middle;
    margin-left: 6px;
  }
`;

const TransparentButton = ({ children, arrow }) => {
  return (
    <TransparentButtonWrapper>
      {children}
      {arrow && (
        <span>
          <ArrowIMG />
        </span>
      )}
    </TransparentButtonWrapper>
  );
};

export default TransparentButton;
