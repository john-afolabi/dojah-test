import React from 'react';
import styled from 'styled-components';
import { tint } from 'polished';

const PrimaryButtonWrapper = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  outline: none;
  border-color: transparent;
  font-size: 14px;
  padding: 14px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => tint(0.4, props.theme.primaryColor)};
  }
`;

export const PrimaryButton = ({ children }) => {
  return <PrimaryButtonWrapper>{children}</PrimaryButtonWrapper>;
};
