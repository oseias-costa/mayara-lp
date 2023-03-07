"use client";

import React from "react";
import styled from "styled-components";
import Title from "../globalStyles/Title";
import Button from "../globalStyles/Button";

export default function DescritptionStart() {
  return (
    <DescritptionContainer>
      <SubTitle>MÉTODO MAYARA BECHI</SubTitle>
      <Title text="Esculpindo Lábios" destak={false} />
      <Title text="Perfeitos" destak={true} />
      <Text>
        Domine a técnica MMB e entregue lábios perfeitos mas acima de tudo, com
        resultados satisfatórios e naturais.
      </Text>
      <Button primary={true} href="#forWho" content="Quero começar agora!" />
    </DescritptionContainer>
  );
}

const DescritptionContainer = styled.div`
  max-width: 450px;
`;

const SubTitle = styled.p`
  color: #f7f1ed;
  font-weight: 600;
  font-size: 16pt;
  position: relative;
  top: 5px;
  @media (max-width: 740px) {
    font-size: 14px;
    top: 7px;
  }
`;

const Text = styled.p`
  color: #f7f1ed;
  font-size: 16pt;
  padding-top: 20px;
  max-width: 400px;
  @media (max-width: 740px) {
    font-size: 12px;
    max-width: 200px;
  }
`;
