import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`



const Banner = () => {
  return (
    <Section>

      <Navbar />
    </Section>
  )
};

export default Banner;