"use client";
import React from "react";
import styled from "styled-components";
import { TitleSection } from "../globalStyles/TitleSection";
import BenefitsContent from "./BenefitsContent";
import Subtitle from "../globalStyles/Subtitle";

export default function Benefits() {
  return (
    <BenefitsContainer id="Beneficios">
      <Subtitle fontSize={36} color="#CAB19D">
        O que você vai adiquirir?
      </Subtitle>
      <BenefitsContent />
    </BenefitsContainer>
  );
}

const BenefitsContainer = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled(TitleSection)`
  text-align: center;
  color: #f7f1ed;
`;
