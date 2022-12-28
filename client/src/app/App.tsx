import React from "react";
import styled from "styled-components";
import {ErrorBoundary} from 'react-error-boundary';
import { ErrorMessage } from "../components/common/ErrorBoundary";
import {AppRouter} from './routing'

const Root = styled.div`
`;

function App() {

  return (
    <Root>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <AppRouter/>
      </ErrorBoundary>
    </Root>
  );
}

export default App;
