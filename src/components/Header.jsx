import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../styles/theme";
import "../App.css";
const Headers = styled.header`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
`;


const Nav = styled.nav`
  display: flex; 
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;



const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &.active {
    background-color: ${(props) => props.theme.secondary};
  }

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

function Header() {
  return (
    <Headers>
    <header>
      <Nav>
        <h1>FITNESS HOME INC.</h1>
        <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="vision">Vision</StyledNavLink>
          <StyledNavLink to="/endpoints">Endpoints</StyledNavLink>
       
      </Nav>
    </header>
    </Headers>
  );
}

export default Header;
