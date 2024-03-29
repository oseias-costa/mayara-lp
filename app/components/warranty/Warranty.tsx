"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import TitleDestak from "../globalStyles/TitleDestak";
import { TitleSection } from "../globalStyles/TitleSection";

export default function Warranty() {
  return (
    <WarrantyContainer>
      <Icon>
        <TitleDestak fontSize={44} text="Garantia" />
        <TitleDestak fontSize={44} text="7 dias" />
      </Icon>
      <div>
        <Title>RISCO ZERO POR 7 DIAS</Title>
        <Text>
          Se dentro de 7 dias você solicitar reembolso, eu te envio o dinheiro
          de volta na hora! Isso significa que você pode entrar, assistir todas
          as aulas, e se mesmo assim ainda achar que este treinamento não vai
          impactar de forma positiva a sua carreira, poderá enviar um e-mail e
          solicitar o reembolso sem qualquer justificativa que eu devolverei
          todo o seu investimento! Dou essa garantia porque tenho certeza que
          todo esse conhecimento poderá dar uma guinada na sua carreira, elevar
          seus resultados como profissional e seus ganhos financeiros.
        </Text>
      </div>
    </WarrantyContainer>
  );
}

const WarrantyContainer = styled.section`
  display: flex;
  padding: 80px;
  align-items: center;
  justify-content: center;
  @media (max-width: 740px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const Icon = styled.div`
  padding: 60px;
  @media (max-width: 740px) {
    text-align: center;
    padding: 40px;
  }
`;

const Title = styled(TitleSection)`
  color: #f7f1ed;
  @media (max-width: 740px) {
    text-align: center;
    font-size: 14pt;
  }
`;

const Text = styled.p`
  padding-top: 20px;
  color: #f7f1ed;
  max-width: 600px;
  @media (max-width: 740px) {
    text-align: center;
    font-size: 9pt;
  }
`;
