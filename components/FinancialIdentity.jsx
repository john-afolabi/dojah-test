import React from 'react';
import styled from 'styled-components';
import financialIdentity from '../assets/images/jpg/financial-identity.jpg';
import { HR } from './KYC';
import PrimaryButton from './Buttons/PrimaryButton';

const FinancialIdentityWrapper = styled.section`
  display: flex;

  div.fi-image {
    background: url(${financialIdentity}) center no-repeat;
    width: 50%;
    background-size: cover;
  }

  .fi-content {
    background-color: #fcfcfc;
    width: 50%;
    padding: 120px;

    h1 {
      font-size: 48px;
      color: #1b2a4e;
    }
    p {
      font-size: 16px;
      line-height: 2;
      color: #677189;
    }
    ul {
      list-style: none;

      li {
        color: #677189;
        line-height: 1.6;

        &:before {
          content: '\\2022';
          color: #3977de;
          font-weight: 900;
          font-size: 20px;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
      }
    }
  }
`;
const FinancialIdentity = () => {
  return (
    <FinancialIdentityWrapper>
      <div className="fi-image"></div>

      <div className="fi-content">
        <HR />
        <h1>Financial Identity</h1>
        <p>
          One major source of identification and verification for both
          <br /> individuals and businesses is the bank identity. With our{' '}
          <br />
          customisable widget, you can identify the customers with <br />
          the following:
        </p>

        <h5>Account Information</h5>
        <p>
          You can retrieve the account information to financially <br />
          identify a customer. This includes the name, account balance,
          <br />
          account status (active or inactive), account number, type of <br />
          account (savings or current).
        </p>

        <h5>Account transactions</h5>
        <p>
          Spending and income patterns can be gotten from this to <br />
          identify and understand how your customers spend and <br />
          earn.
        </p>

        <PrimaryButton arrow>Watch Demo </PrimaryButton>
      </div>
    </FinancialIdentityWrapper>
  );
};

export default FinancialIdentity;
