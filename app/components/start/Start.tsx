"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import StartImg from "../../../public/start/start_new.png";
import DescritptionStart from "./DescritptionStart";

export default function Start() {
  return (
    <StartSection>
      <ImageStyle src={StartImg} alt="Imagem da Dra. Mayara Bechi" />
      <DescritptionStart />
    </StartSection>
  );
}

const StartSection = styled.section`
  background-color: #030303;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageStyle = styled(Image)`
  width: 550px;
  height: auto;
  @media (max-width: 740px) {
    width: 380px;
    height: auto;
  }
`;
