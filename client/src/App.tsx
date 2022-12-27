import React from "react";
import styled from "styled-components";
import { HomeScreen } from "./components/HomePage/HomeScreen";
import {ErrorBoundary} from 'react-error-boundary';
import { ErrorMessage } from "./components/common/ErrorBoundary";

const Root = styled.div`
`;

function App() {

  return (
    <Root>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <HomeScreen />
      </ErrorBoundary>
    </Root>
  );
}

export default App;
