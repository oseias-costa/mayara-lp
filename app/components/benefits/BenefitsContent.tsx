"use client";
import React from "react";
import Image from "next/image";
import BefefitsBlocks from "./BefefitsBlocks";
import Img from "../../../public/benefits__img.png";
import styled from "styled-components";
import ContainerDestak from "../globalStyles/ContainerDestak";

export default function BenefitsContent() {
  return (
    <Content>
      <BefefitsBlocks />
    </Content>
  );
}

const Content = styled(ContainerDestak)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
