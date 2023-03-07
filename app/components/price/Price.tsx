"use client";
import React from "react";
import { TitleSection } from "../globalStyles/TitleSection";
import styled from "styled-components";
import MethodsImg from "../../../public/methods.png";
import Button from "../globalStyles/Button";
import Image from "next/image";

export default function Price() {
  return (
    <PriceContainer>
      <TitleSection>Investimento</TitleSection>
      <Destak>Por apenas 12x de</Destak>
      <TitleSection>R$ 397,00</TitleSection>
      <Destak>ou R$ 3497,00 à vista </Destak>
      <Text>
        Toque no botão abaixo e aproveite essa oportunidade enquanto ela está
        disponível
      </Text>
      <Button
        primary={true}
        href="#"
        content="Quero me tornar um especialista em lábios!"
      />
      <Image src={MethodsImg} alt="Métods de Pagamento Método Mayara Bechi" />
    </PriceContainer>
  );
}

const PriceContainer = styled.section`
  text-align: center;
  max-width: 700px;
  background-color: rgba(202, 177, 157, 0.25);
  border: 1px solid #cab19d;
  border-radius: 10px;
  padding: 70px;
  margin-top: 50px;
`;

const Destak = styled.p`
  color: #a08d80;
  font-weight: 600;
  &:last-of-type {
    padding-top: 50px;
  }
`;

const Text = styled.p``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
`;
