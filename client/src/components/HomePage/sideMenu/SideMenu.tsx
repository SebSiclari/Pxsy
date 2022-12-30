import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StyledLi } from "./StyledLi";

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  list-style: none;
  font-size: 8.4px;
  color: #999999;
  font-family: canada-type-gibson;
  margin-right: 35px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #008aab;
  color: white;
  height: 3rem;
  width: 6rem;
  font-weight: bold;
  font-size: smaller;
`;
const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-right: 6rem;
  width: 6rem;
  border-right: 1px solid rgb(239, 239, 239);
`;
const ImageContainer = styled.div`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SideMenu = () => {
  // const navigate = useNavigate()

  // const navigateToRegistrationPage = (e:React.MouseEvent) =>{
  //   e.preventDefault()
  //   navigate('/registration')
  // }

  // const handleClick = (e:React.MouseEvent)=>{
  //   e.preventDefault();
  //   navigate('/all')
  // }

  const [option, setOption] = React.useState<string>("");

  const sideMenuOptions = [
    { option: "MATCHES", src: "matches-logo.png" },
    { option: "IMAGES", src: "images-logo.png" },
    { option: "CASES", src: "cases-logo.png" },
    { option: "TAKEDOWNS", src: "taxedowns-logo.png" },
    { option: "REGISTER", src: "register-logo.png" },
  ];

  interface SideMenuOptions {
    option: string;
    src: string;
  }

  return (
    <MenuContainer>
      <Header> PIXSY</Header>
      <StyledUL>
        {sideMenuOptions.map((item, i) => {
          return (
            <StyledLi
              key={i}
              option={item.option}
              src={item.src}
              active={option === item.option}
              setOption={setOption}
            />
          );
        })}
      </StyledUL>
    </MenuContainer>
  );
};
