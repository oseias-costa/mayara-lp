"use client";
import React from "react";
import styled from "styled-components";
import Subtitle from "../globalStyles/Subtitle";
import TitleDestak from "../globalStyles/TitleDestak";
import TitleDestakWhite from "./TitleDestakWhite";

export default function SubtitlePains() {
  return (
    <Row>
      <TitleDestak fontSize={30} text="É possível dar um" />
      <TitleDestakWhite fontSize={30} text="&nbsp;START&nbsp;" />
      <TitleDestak fontSize={30} text="na sua carreira, se você:" />
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 35px;
`;

const SubTitle = styled.p`
  color: ${(props) => props.color};
  display: inline;
  font-size: 14pt;
  font-weight: 500;
  padding: 3px;
`;
