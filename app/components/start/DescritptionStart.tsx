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
      <SubTitle>TÉCNICA EXCLUSIVA MAYARA BECHI</SubTitle>
      <Title text="Preenchimento e" destak={false} fontSize={48} />
      <TitleDestak text="Escultura Labial" fontSize={48}/>
      <Text>
        Domine a técnica MB e entregue lábios perfeitos mas acima de tudo, com
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
    bottom: 200px;
    z-index: 2;
  }
`;

const SubTitle = styled.p`
  color: #f7f1ed;
  font-weight: 600;
  font-size: 18pt;
  position: relative;
  top: 5px;
  @media (max-width: 740px) {
    font-size: 18px;
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
