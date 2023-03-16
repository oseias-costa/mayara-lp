import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Photo from "../../../public/learn/learn.png";
import LearnModules from "./LearnModules";

export default function LearnContent() {
  return (
    <Container id="LearnContent">
      <Img src={Photo} alt="O que você vai aprender no método Mayara Bechi" />
      <LearnModules />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 740px) {
    align-items: center;
    justify-content: center;
  }
`;
const Img = styled(Image)`
  max-width: 450px;
  max-height: 548px;
  @media (max-width: 740px) {
    max-width: 350px;
    max-height: 426px;
  }
`;
