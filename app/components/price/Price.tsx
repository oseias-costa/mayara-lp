"use client";
import React from "react";
import ContainerDestak from "../globalStyles/ContainerDestak";
import Subtitle from "../globalStyles/Subtitle";
import TitleDestak from "../globalStyles/TitleDestak";
import ButtonGrad from "../globalStyles/ButtonGrad";
import styled from "styled-components";
import MethodsImg from "../../../public/methods.png";
import Image from "next/image";

export default function Price() {
  return (
    <Container>
      <ContainerDestak size="auto">
        <PriceBody>
          <TitleDestak fontSize={44} text="Investimento" />
          <Destak>Por apenas 12x de</Destak>
          <PriceRow>
            <Subtitle fontSize={36} color="#f7f1ed">
              R$&nbsp;
            </Subtitle>
            <Subtitle fontSize={55} color="#f7f1ed">
              397
            </Subtitle>
          </PriceRow>
          <Destak>ou R$ 3497,00 à vista </Destak>
          <Text>
            Toque no botão abaixo e aproveite essa oportunidade enquanto ela
            está disponível
          </Text>
          <ButtonGrad
            href="#"
            text="Quero me tornar um especialista em lábios!"
          />
          <Img src={MethodsImg} alt="Métods de Pagamento Método Mayara Bechi" />
        </PriceBody>
      </ContainerDestak>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 0;
  border: none;
  @media (max-width: 740px) {
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 0px;
  }
`;

const PriceBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  @media (max-width: 740px) {
    padding: 40px;
    width: auto;
    margin: 0%;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: end;
`;

const Destak = styled.p`
  color: #a08d80;
  font-weight: 600;
  font-size: 11pt;
  &:nth-child(2) {
    position: relative;
    top: 20px;
  }
  &:nth-child(4) {
    padding-bottom: 20px;
  }
`;

const Text = styled.p`
  max-width: 400px;
  text-align: center;
  color: #f7f1ed;
  font-size: 10pt;
`;

const Img = styled(Image)`
  position: relative;
  top: 40px;
  filter: grayscale(100%);
  // width: 400px;
  @media (max-width: 740px) {
    width: 174px;
    height: 15px;
  }
`;
