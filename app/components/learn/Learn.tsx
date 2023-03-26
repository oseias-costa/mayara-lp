"use client";
import React from "react";
import styled from "styled-components";
import TitleDestak from "../globalStyles/TitleDestak";
import LearnContent from "./LearnContent";


export default function Learn() {
  return (
    <LearnContainer>
      <TitleDestak fontSize={30} text="Tudo que você irá Aprender" />
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
