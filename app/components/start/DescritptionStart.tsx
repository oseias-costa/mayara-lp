"use client";

import React from "react";
import styled from "styled-components";
import Title from "../globalStyles/Title";
import Button from "../globalStyles/Button";
import TitleDestak from "../globalStyles/TitleDestak";
import ContainerDestak from "../globalStyles/ContainerDestak";
import ButtonStart from "./ButtonStart";

export default function DescritptionStart() {
  return (
    <DescritptionContainer>
      <SubTitle>MÉTODO MAYARA BECHI</SubTitle>
      <Title text="Esculpindo Lábios" destak={false} fontSize={48} />
      <TitleDestak text="Perfeitos" fontSize={48}/>
      <Text>
        Domine a técnica MMB e entregue lábios perfeitos mas acima de tudo, com
        resultados satisfatórios e naturais.
      </Text>
      <ButtonStart />
    </DescritptionContainer>
  );
}

const DescritptionContainer = styled.div`
  max-width: 450px;
  margin-top: 50px;
  @media (max-width: 740px){
    text-align: center;
    margin-top: 0px;
    position: relative;
    bottom: 80px;
  }
`;

const SubTitle = styled.p`
  color: #f7f1ed;
  font-weight: 600;
  font-size: 20pt;
  position: relative;
  top: 5px;
  @media (max-width: 740px) {
    font-size: 20px;
    top: 7px;
  }
`;

const Text = styled.p`
  color: #f7f1ed;
  font-size: 16pt;
  padding-top: 20px;
  max-width: 400px;
  font-weight: 300;
  @media (max-width: 740px) {
    font-size: 16px;
    padding: 20px;
  }
`;
