"use client";
import React from "react";
import BefefitsBlocks from "./BefefitsBlocks";
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
