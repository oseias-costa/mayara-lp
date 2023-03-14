"use client";
import React from "react";
import styled from "styled-components";
import PainContent from "./PainContent";
import SubtitlePains from "./SubtitlePains";
import Teste from "../../../public/pain/results_pain.png";
import Image from "next/image";

export default function Pains() {
  return (
    <PainsContainer>
      <SubtitlePains />
      <PainContent />
    </PainsContainer>
  );
}

const PainsContainer = styled.section`
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
