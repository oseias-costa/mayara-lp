"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Photo from "../../../public/insecurity/lips.png";
import InsecurityContent from "./InsecurityContent";

export default function Insecurity() {
  return (
    <InsecurityContainer id="Insecurity">
      <InsecurityBlock>
        <InsecurityContent />
      </InsecurityBlock>
      <Img
        src={Photo}
        alt="Lábios perfeitos de uma paciente da Dra. Mayara Bechi"
      />
    </InsecurityContainer>
  );
}

const InsecurityContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 740px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const InsecurityBlock = styled.div`
  position: relative;
  left: 85px;
  @media (max-width: 740px) {
    left: 0px;
  }
`;

const Img = styled(Image)`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  border: 5px solid #cab19d;
  box-shadow: 0px 4px 50px 15px #000000;
  position: relative;
  right: 85px;
  top: 18px;
  @media (max-width: 740px) {
    top: -120px;
    right: 0px;
  }
`;
