import React from "react";
import styled from "styled-components";
import { HomeScreen } from "./components/HomePage/HomeScreen";
import { SearchBar } from "./components/HomePage/SearchBar";

const Root = styled.div`
`;

function App() {

  const [input, setInput] = React.useState<string>("");


  return (
    <Root>
      <SearchBar input={input} setInput={setInput}/>
      <HomeScreen input={input}/>
    </Root>
  );
}

export default App;
