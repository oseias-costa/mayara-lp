"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import StartImg from "../../../public/start/mayara-new-start.png";
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ImageStyle = styled(Image)`
  width: 450px;
  height: auto;
  position: relative;
  bottom: 90px;
  right: 70px;
  z-index: 1;
  @media (max-width: 740px) {
    width: 360px;
    height: auto;
  }
`;
