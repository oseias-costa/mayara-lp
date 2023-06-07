"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import StartImg from "../../../public/start/headline-image-background.png";
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
  background: linear-gradient(270deg, #D8CFC6 6.15%, #D8CEC4 91.34%);
  height: 681.28px;
  @media (max-width: 740px) {
    height: 730px;
  }
`;

const ImageStyle = styled(Image)`
  width: 400px;
  height: auto;
  position: absolute;
  left: 0;
  z-index: 1;
  @media (max-width: 740px) {
    width: 360px;
    height: auto;
  }
`;
