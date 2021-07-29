import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/png/logo.png';
import PrimaryButton from '../../Buttons/PrimaryButton';

const NavigationWrapper = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-list {
    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;

      li {
        font-size: 14px;
        padding: 5px 14px;

        a {
          color: #677189;
        }
      }
    }
  }

  .cta {
    span {
      margin-right: 10px;

      a {
        font-size: 14px;
        color: #677189;
      }
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <div>
        <img src={logo} />
      </div>

      <div className="menu-list">
        <ul>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Documentation</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      <div className="cta">
        <span>
          <a>Login</a>
        </span>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;
