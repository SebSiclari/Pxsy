import React from "react";
import styled from "styled-components";

const StyledUL = styled.ul`
  display: flex;
  flex-direction: row;
  flex:1;
  gap: 3rem;
  list-style: none;
  font-size: 16.8px;
  color: #999999;
  font-family: canada-type-gibson;
  align-items: center;
  width: 50%;
`;
const Header = styled.div`
  cursor: pointer;
  border: none;
  background-color: rgb(0, 138, 171);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 45px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 600;
  color: rgb(255, 255, 255);
`;

const SearchContainer = styled.div`
  display:flex;

`

const StyledInput=styled.input`
  outline:none;
  border:none;
`



const MainContainer = styled.nav`
  display: flex;
  flex-direction: row;
  margin-right: 3rem;
  height: 3.5rem;
  margin-top: 2rem;
  width: 70vw;
  justify-content: center;
  overflow: hidden;
  box-shadow: 2px 3px 10px 20px rgba(0,0,0,0.5);
`

const SearchInnerContainer = styled.div`

`


const ImageContainer= styled.div`
height: 2rem;
width: 2rem;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:contain;
`
interface SearchBarProps {
  input: string;
  setInput: (value: string) => void;
}

export const SearchMenu = ({ setInput, input }: SearchBarProps) => {
  return (
    <MainContainer>
      <StyledUL>
        <li>
          <p>All</p>
        </li>
        <li>
          <p>News</p>
        </li>
        <li>
          <p>Ignored</p>
        </li>
        </StyledUL>
        <SearchContainer>

        <StyledInput
          placeholder="Search"
          type={"text"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Header>IMPORT</Header>
      </SearchContainer>
    </MainContainer>
  );
};
