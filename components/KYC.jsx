import React from 'react';
import styled from 'styled-components';
import kyc from '../assets/images/jpg/kyc.jpg';

const KYCWrapper = styled.section`
  display: flex;
  min-height: 620px;

  div.kyc-image {
    background: url(${kyc}) center no-repeat;
    width: 50%;
    background-size: cover;
  }

  .kyc-content {
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

export const HR = styled.hr`
  background: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  width: 50px;
  height: 4px;
  max-width: 100px;
  margin: 0px;
`;

const KYC = () => {
  return (
    <KYCWrapper>
      <div className="kyc-image"></div>

      <div className="kyc-content">
        <HR />
        <h1>Know your customer</h1>
        <p>
          With our various data points and biometric verification
          <br /> techniques, you can identify and verify customers with ease.
          <br /> Some of the data points include:
        </p>

        <ul>
          <li>Validate BVN</li>
          <li>Lookup NIN</li>
          <li>Lookup VIN</li>
          <li>Lookup Phone Number</li>
          <li>Lookup NUBAN</li>
          <li>Liveness check</li>
          <li>Selfie with ID verification</li>
          <li>And so on</li>
        </ul>
      </div>
    </KYCWrapper>
  );
};

export default KYC;
