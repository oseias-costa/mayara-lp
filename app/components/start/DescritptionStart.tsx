"use client";
import React from "react";
import styled from "styled-components";
import Title from "../globalStyles/Title";
import TitleDestak from "../globalStyles/TitleDestak";
import ContainerDestak from "../globalStyles/ContainerDestak";
import ButtonStart from "./ButtonStart";

export default function DescritptionStart() {
  return (
    <Container>
      <ContainerDestak size='600px'>
        <DescritptionContainer>
          <SubTitle>TÉCNICA EXCLUSIVA MAYARA BECHI</SubTitle>
          <Title text="Preenchimento e" destak={false} fontSize={48} />
          <TitleDestak text="Escultura Labial" fontSize={48}/>
          <TextStart>
            Domine a técnica MB e entregue lábios perfeitos mas acima de tudo, com
            resultados satisfatórios e naturais.
          </TextStart>
          <ButtonStart />
        </DescritptionContainer>
      </ContainerDestak>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  height: 480px;
  position: relative;
  left: 40px;
  top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 4px 50px 20px rgba(3, 3, 3, 0.4);
  z-index: 2;
  border-radius: 8px;
  @media (max-width: 740px){
    left: 0px;
    top: 350px;
    height: 349px;
  }
`

const DescritptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 50px;
  text-align: center;
  @media (max-width: 740px){
    width: 350px;
    padding: 20px;
    /* text-align: center;
    margin-top: 0px;
    position: relative;
    bottom: 200px;
    z-index: 2; */
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
    /* top: 7px; */
  }
`;

const TextStart = styled.p`
  color: #f7f1ed;
  font-size: 16pt;
  padding-top: 20px;
  padding-bottom: 40px;
  max-width: 400px;
  font-weight: 300;
  margin: 0;
  @media (max-width: 740px) {
    font-size: 16px;
    /* padding: 20px; */
  }
`;
