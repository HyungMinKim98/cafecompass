// Import React and styled-components
import React from 'react';
import styled from 'styled-components';

// Create a styled footer
const StyledFooter = styled.footer`
  background-color: #222;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      © 2024 Cafe Collection. All rights reserved.
    </StyledFooter>
  );
};

export default Footer;