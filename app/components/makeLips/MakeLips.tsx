import React from "react";
import styled from "styled-components";
import Button from "../globalStyles/Button";
import Subtitle from "../globalStyles/Subtitle";
import { TitleSection } from "../globalStyles/TitleSection";
import BeforeAndAfter from "./BeforeAndAfter";
import Blocks from "./Blocks";

export default function MakeLips() {
  return (
    <Container>
      <Subtitle fontSize={36} color='#030303'>Fazer lábios não é receita de bolo!</Subtitle>
      <Blocks />
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
  background-color: #e5d5ca;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled(TitleSection)`
  color: #030303;
  @media (max-width: 740px) {
    margin-left: 40px;
    margin-right: 40px;
    text-align: center;
  }
`;

const Text = styled.p`
  text-align: center;
  max-width: 600px;
  padding-top: 25px;
  @media (max-width: 740px) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;
