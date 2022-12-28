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
  cursor:pointer;
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

interface RootProps {
  active:boolean
}
const StyledLi = styled.li`
  color:${(props:RootProps)=>(props.active ? "rgb(0, 138, 171);": "#999999")}
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
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.5);
`

const SearchInnerContainer = styled.div`
  display:flex;
  align-items:center;
  gap:1rem;
`


const ImageContainer= styled.div`
height: 1.5rem;
width: 1.5rem;
display:flex;
justify-content:center;
align-items:center;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:contain;
`

interface SearchBarProps {
  input: string;
  setInput: (value: string) => void;
  setHeader: (value:string) => void;
  active:boolean;
}



export const SearchMenu = ({ setInput, input, active, setHeader }: SearchBarProps) => {

  async function handleClick(e:any){
    setHeader(e.target.innerText)
  }

  return (
    <MainContainer>
      <StyledUL>
        <StyledLi onClick={(e)=> handleClick(e)} active={active}>
          <p>All</p>
        </StyledLi>
        <StyledLi onClick={(e)=> handleClick(e)} active={active}>
          <p>New</p>
        </StyledLi>
        <li>
          <p>Ignored</p>
        </li>
        </StyledUL>
        <SearchContainer>
        <SearchInnerContainer>
          <ImageContainer>
              <Image src={'search.svg'} alt="search-icon"/>
            </ImageContainer>
          <StyledInput
            placeholder="Search"
            type={"text"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </SearchInnerContainer>
        <Header>IMPORT</Header>
      </SearchContainer>
    </MainContainer>
  );
};
