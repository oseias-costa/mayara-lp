"use client";
import React from "react";
import styled from "styled-components";
import { TitleSection } from "../globalStyles/TitleSection";
import BenefitsContent from "./BenefitsContent";
import Subtitle from "../globalStyles/Subtitle";

export default function Benefits() {
  return (
    <BenefitsContainer id="Beneficios">
      <Title>
        <Subtitle fontSize={36} color="#CAB19D">
          O que você vai adiquirir?
        </Subtitle>
      </Title>
      <BenefitsContent />
    </BenefitsContainer>
  );
}

const BenefitsContainer = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  color: #f7f1ed;
  width: 340px;
  padding: 40px;
`;
