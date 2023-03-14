import React from "react";
import styled from "styled-components";
import Button from "../globalStyles/Button";
import Subtitle from "../globalStyles/Subtitle";
import { TitleSection } from "../globalStyles/TitleSection";
import BeforeAndAfter from "./BeforeAndAfter";
import Blocks from "./Blocks";
import Photo from "./Photo";

export default function MakeLips() {
  return (
    <Container>
      <Subtitle fontSize={36} color="#CAB19D">
        Fazer lábios não é receita de bolo!
      </Subtitle>
      <Photo />
      <Text>
        E a sua missão como profissional, é saber trabalhar de forma natural em
        todas essas variáveis. É por isso que desenvolvi este treinamento!
      </Text>
      <BeforeAndAfter />
      <Button
        href="#Beneficios"
        primary={false}
        content="Quero dominar o preenchimento labial!"
      />
    </Container>
  );
}

const Container = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled(TitleSection)`
  color: #fff;
  @media (max-width: 740px) {
    margin-left: 40px;
    margin-right: 40px;
    text-align: center;
  }
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
  max-width: 600px;
  padding-top: 25px;
  @media (max-width: 740px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;
