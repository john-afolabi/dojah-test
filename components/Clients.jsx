import React from 'react';
import styled from 'styled-components';
import expensa from '../assets/images/png/expensa.png';
import mmbhomecare from '../assets/images/png/mmbhomecare.png';
import recallo from '../assets/images/png/recallo.png';
import moneymie from '../assets/images/png/moneymie.png';
import whogohost from '../assets/images/png/whogohost.png';

const ClientsWrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  flex-wrap: wrap;

  img {
    max-width: 100%;
    height: auto;
    padding: 100px 0;
  }
`;

const Clients = () => {
  return (
    <ClientsWrapper>
      <img src={expensa} alt="expensa" />
      <img src={mmbhomecare} alt="mmbhomecare" />
      <img src={recallo} alt="recallo" />
      <img src={moneymie} alt="moneymie" />
      <img src={whogohost} alt="whogohost" />
    </ClientsWrapper>
  );
};

export default Clients;
