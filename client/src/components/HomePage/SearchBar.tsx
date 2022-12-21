import React from "react";
import styled from "styled-components";

const Root = styled.div`
border:solid 2px blue;
display:flex;
justify-content: center;
`
interface SearchBarProps {
  input:string
  setInput:(value:string) => void
}

export const SearchBar = ({setInput, input}:SearchBarProps) => {


  return (
    <Root>
      <input
        placeholder="SEARCH"
        type={"text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <>{input}</>
    </Root>
  );
};
