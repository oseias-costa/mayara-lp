"use client";
import React from "react";
import { TitleSection } from "../globalStyles/TitleSection";
import styled from "styled-components";
import MethodsImg from "../../../public/methods.png";
import Button from "../globalStyles/Button";
import Image from "next/image";
import ButtonPrice from "./ButtonPrice";

export default function Price() {
  return (
    <Container>
      <PriceBody>
        <Title>Investimento</Title>
        <Destak>Por apenas 12x de</Destak>
        <TitleSection>R$ 397,00</TitleSection>
        <Destak>ou R$ 3497,00 à vista </Destak>
        <Text>
          Toque no botão abaixo e aproveite essa oportunidade enquanto ela está
          disponível
        </Text>
        <ButtonPrice href="#">Quero me tornar um especialista em lábios!</ButtonPrice>
        <Img src={MethodsImg} alt="Métods de Pagamento Método Mayara Bechi" />
      </PriceBody>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f1ed;
  padding-bottom: 40px;
  padding-top: 0;
  border: none;
`;

const PriceBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(202, 177, 157, 0.25);
  border: 1px solid #cab19d;
  border-radius: 10px;
  padding: 70px;
  margin-top: 50px;
  @media (max-width: 740px) {
    padding: 40px;
    width: auto;
    margin: 5%;
  }
`;

const Title = styled(TitleSection)`
  &:nth-child(1) {
    padding-bottom: 20px;
  }
`;

const Destak = styled.p`
  color: #a08d80;
  font-weight: 600;
  &:nth-child(4) {
    padding-bottom: 20px;
  }
`;

const Text = styled.p`
  max-width: 400px;
  text-align: center;
`;

const Btn = styled(Button)`
  position: relative;
  top: 20px;
  margin-bottom: 60px;
`;

const Img = styled(Image)`
  filter: grayscale(100%);
  // width: 400px;
  @media (max-width: 740px) {
    width: 174px;
    height: 15px;
  }
`;
