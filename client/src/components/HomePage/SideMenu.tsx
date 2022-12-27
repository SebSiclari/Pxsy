import React from "react";
import styled from "styled-components";

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  list-style:none;
  font-size:8.4px;
  color:#999999;
  font-family:canada-type-gibson;
  margin-right:35px;
`;
const Header = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color: #008AAB;
color: white;
height:3rem;
width:6rem;
font-weight:bold;
font-size:smaller;
background-image:url(PixsyLogo.webp)
`;
const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 1rem;
  margin-right:5rem;
  width:6rem;
  border-right:1px solid rgb(239, 239, 239);
`;
const ImageContainer= styled.div`
height: 2rem;
width: 2rem;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:contain;
`

export const SideMenu = () => {
  return (
    <MenuContainer>
      <Header> PIXSY</Header>
      <StyledUL>
        <li>
          <p>MATCHES</p>
        </li>
        <li>
          <ImageContainer>
          <Image src={'images-logo.png'} alt="icon" />
          </ImageContainer>
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
