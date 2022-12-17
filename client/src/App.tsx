import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { usePhotos } from "./hooks/usePhotos";

const Root = styled.div``;

function App() {
  const { photos } = usePhotos();

  return (
    <Root>
      {photos?.map((item) => {
        return <img src={item.url} height={100} width={100} />;
      })}
    </Root>
  );
}

export default App;
