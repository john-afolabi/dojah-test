import React from 'react';
import styled from 'styled-components';
import kyb from '../assets/images/jpg/kyb.jpg';
import { HR } from './KYC';

const KYBWrapper = styled.section`
  display: flex;
  min-height: 620px;

  div.kyb-image {
    background: url(${kyb}) center no-repeat;
    width: 50%;
    background-size: cover;
  }

  .kyb-content {
    background-color: #fcfcfc;
    width: 50%;
    padding: 150px;

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

const KYB = () => {
  return (
    <KYBWrapper>
      <div className="kyb-content">
        <HR />
        <h1>Know your business</h1>
        <p>
          You can also verify companies’ corporate information and
          <br /> the personal information of those that manage the
          <br /> operations of the company. This can be achieved with the:
        </p>

        <ul>
          <li>Lookup CAC</li>
          <li>Lookup TIN</li>
          <li>Lookup NUBAN of company</li>
        </ul>
      </div>

      <div className="kyb-image"></div>
    </KYBWrapper>
  );
};

export default KYB;
