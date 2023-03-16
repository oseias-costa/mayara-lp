"use client";
import React from "react";
import styled from "styled-components";
import PainContent from "./PainContent";
import SubtitlePains from "./SubtitlePains";

export default function Pains() {
  return (
    <PainsContainer>
      <SubtitlePains />
      <PainContent />
    </PainsContainer>
  );
}

const PainsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 740px){
    padding: 20px;
  }
`;
