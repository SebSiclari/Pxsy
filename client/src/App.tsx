import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { usePhotos } from "./hooks/usePhotos";
import { HomeScreen } from "./components/HomePage/HomeScreen";

const Root = styled.div``;

function App() {

  return (
    <Root>
      <HomeScreen/>
    </Root>
  );
}

export default App;
