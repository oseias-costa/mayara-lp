"use client";
import React from "react";
import styled from "styled-components";
import TitleDestak from "../globalStyles/TitleDestak";
import { data } from "./benefitsData";

type ItemData = {
  id: number;
  content: string;
  negrito: string;
};

export default function BefefitsBlocks() {
  const block = data.map((item: ItemData) => {
    return (
      <BlockItem key={item.id}>
        <NumberList>
          <TitleDestak fontSize={50} text={item.id} />
        </NumberList>
        <BlockText>
          <Negrito>{item.negrito}</Negrito>
          <Text>{item.content}</Text>
        </BlockText>
      </BlockItem>
    );
  });
  return <Container>{block}</Container>;
}

const Container = styled.div`
  padding: 45px;
  @media (max-width: 740px) {
    max-width: auto;
    position: relative;
    top: -10px;
  }
`;
const BlockItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  @media (max-width: 740px) {
    padding: 10px;
    display: block;
    width: 150px;
    text-align: center;
  }
`;

const NumberList = styled.div`
  width: 80px;
  text-align: center;
  @media (max-width: 740px) {
    text-align: center;
    width: auto;
    padding-bottom: 10px;
  }
`;

const BlockText = styled.div`
  max-width: 300px;
  padding-left: 20px;
  @media (max-width: 740px) {
    padding-left: 0;
  }
`;

const Text = styled.p`
  color: #f7f1ed;
  font-size: 16pt;
  display: inline;
  @media (max-width: 740px) {
    padding-left: 0;
    padding-top: 5px;
    font-size: 12pt;
    text-align: center;
  }
`;

const Negrito = styled(Text)`
  font-weight: 600;
`;

const Title = styled.p`
  font-size: 22pt;
  font-weight: 600;
  color: #f7f1ed;
  @media (max-width: 740px) {
    font-size: 16pt;
    text-align: center;
  }
`;
