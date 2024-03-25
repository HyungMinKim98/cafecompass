import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';

// Styled components
const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const NavBrand = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;

const NavToggle = styled.button`
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;

  &.active {
    text-decoration: underline;
  }
`;

const NavLinksContainer = styled.div<NavLinksProps>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;


// TypeScript interface for props
interface NavLinksProps {
  isOpen: boolean;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNavBar>
      <NavBrand>
        <NavLink to="/">
          <img src={logo} alt="Website Logo" />
        </NavLink>
      </NavBrand>
      <NavToggle onClick={toggle}>☰</NavToggle>
      <NavLinksContainer isOpen={isOpen}>
        <StyledNavLink to="/" onClick={() => setIsOpen(false)}>Home</StyledNavLink>
        <StyledNavLink to="/about" onClick={() => setIsOpen(false)}>About</StyledNavLink>
        <StyledNavLink to="/service" onClick={() => setIsOpen(false)}>Services</StyledNavLink>
        {/* Add more links as needed */}
      </NavLinksContainer>
    </StyledNavBar>
  );
};

export default NavBar;