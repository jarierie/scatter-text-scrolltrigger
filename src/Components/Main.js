import React from "react";
import styled from "styled-components";
import { Text } from "./Text";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0d0d0d;
`;

export const Main = () => {
  return (
    <>
      <Container>
        <Text text={"Eto ay isang text, testing lang hehehe"} />
      </Container>
      <Container></Container>
    </>
  );
};
