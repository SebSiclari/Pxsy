import React from "react";
import styled from "styled-components";
import { HomeScreen } from "./components/HomePage/HomeScreen";
import { SearchBar } from "./components/HomePage/SearchBar";
import {ErrorBoundary} from 'react-error-boundary';
import { ErrorMessage } from "./components/common/ErrorBoundary";

const Root = styled.div`
`;

function App() {

  const [input, setInput] = React.useState<string>("");


  return (
    <Root>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <SearchBar input={input} setInput={setInput}/>
      <HomeScreen input={input}/>
      </ErrorBoundary>
    </Root>
  );
}

export default App;
