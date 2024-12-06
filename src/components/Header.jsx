import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Headers = styled.header`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
`;

function Header() {
  return (
    <Headers>
    <header>
      <nav>
        <h1>TRUCKER HOME INC.</h1>
        <NavLink to="/">Home </NavLink>
        <NavLink to="vision">Vision </NavLink>
        <NavLink to="/endpoints">Endpoints </NavLink>
       
      </nav>
    </header>
    </Headers>
  );
}

export default Header;
