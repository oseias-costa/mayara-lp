"use client";
import React from "react";
import styled from "styled-components";
import SubtitleBlocks from "../globalStyles/SubtitleBlocks";
import LearnContent from "./LearnContent";


export default function Learn() {
  return (
    <LearnContainer>
      <SubtitleBlocks fontSize={30} color="#CAB19D">
        Tudo que você irá Aprender
      </SubtitleBlocks>
      <LearnContent />
    </LearnContainer>
  );
}

const LearnContainer = styled.section`
  padding-top: 60px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0C0B0B;
`;
