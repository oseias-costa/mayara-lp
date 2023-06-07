import React from "react";
import styled from "styled-components";
import ButtonGrad from "../globalStyles/ButtonGrad";
import SubtitleBlocks from "../globalStyles/SubtitleBlocks";
import { TitleSection } from "../globalStyles/TitleSection";
import BeforeAndAfter from "./BeforeAndAfter";
import dynamic from "next/dynamic";

const Photo = dynamic(() =>  import('./Photo'), {
  ssr: false,
});

export default function MakeLips() {
  return (
    <Container>
      <SubtitleBlocks fontSize={36} color="#CAB19D">
        Fazer lábios não é receita de bolo!
      </SubtitleBlocks>
      <Photo />
      <Text>
        E a sua missão como profissional, é saber trabalhar de forma natural em
        todas essas variáveis. É por isso que desenvolvi este treinamento!
      </Text>
      <BeforeAndAfter />
      <ButtonGrad
        href="#Beneficios"
        text="Quero dominar o preenchimento labial!"
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
  @media (max-width: 740px){
    margin-left: 20px;
    margin-right: 20px;
  }
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
