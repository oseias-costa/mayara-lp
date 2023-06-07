"use client";
import React from "react";
import styled from "styled-components";
import SubtitleBlocks from "../globalStyles/SubtitleBlocks";

export default function SubtitlePains() {
  return (
    <Row>
      <SubtitleBlocks fontSize={30} color="#CAB19D">
      É possível dar um START na sua carreira mesmo se você:
      </SubtitleBlocks>
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
