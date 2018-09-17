import React from 'react';
import styled from 'react-emotion';
import { Link } from '@reach/router';
import colors from './colors';

const Container = styled('header')`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;


const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <header>
        <NavLink to="/">Adopt Me!</NavLink>
        <NavLink to="/search-params"><span aria-label="search" role="img">Search</span></NavLink>
      </header>
    </Container>
  )
}

export default NavBar;