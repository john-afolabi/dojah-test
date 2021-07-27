import React from 'react';
import styled from 'styled-components';
import { tint } from 'polished';

const SecondaryButtonWrapper = styled.button`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  outline: none;
  border-color: transparent;
  font-size: 14px;
  padding: 14px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => tint(0.4, props.theme.secondaryColor)};
  }
`;

export const SecondaryButton = ({ children }) => {
  return <SecondaryButtonWrapper>{children}</SecondaryButtonWrapper>;
};
