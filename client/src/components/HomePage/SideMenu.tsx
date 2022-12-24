import React from "react";
import styled from "styled-components";

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  list-style:none;
`;
const Header = styled.div`
  background-color: darkgreen;
  color: white;
`;
const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right:3rem;
`;

export const SideMenu = () => {
  return (
    <MenuContainer>
      <Header> PIXSY</Header>
      <StyledUL>
        <li>
          <p>MATCHES</p>
        </li>
        <li>
          <p>IMAGES</p>
        </li>
        <li>
          <p>CASES</p>
        </li>
        <li>
          <p>TAXEDOWNS</p>
        </li>
        <li>
          <p>REGISTER</p>
        </li>
      </StyledUL>
    </MenuContainer>
  );
};
