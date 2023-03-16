"use client";
import React from "react";
import styled from "styled-components";
import TitleDestak from "../globalStyles/TitleDestak";
import Bonus from "./Bonus";
import LearnBlocks from "./LearnBlocks";
import LearnContent from "./LearnContent";
import TitleLearn from "./TitleLearn";

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
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
