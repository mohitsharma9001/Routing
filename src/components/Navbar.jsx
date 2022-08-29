import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export const Navbar = ()=>{
    const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: black;
    color: white;
    padding: 20px;
  `;
  const StyledLink = styled(Link)`
  text-decoration : none;
  color : white;
  font-size : 20px;
`;
    return <NavbarWrapper>
 <StyledLink to="/">Home</StyledLink>
 <StyledLink to="/about">About</StyledLink>
 <StyledLink to="/contact">Contact</StyledLink>
 <StyledLink to="user">User</StyledLink>
 <StyledLink to="/login">Login</StyledLink>

    </NavbarWrapper>
}

