"use client";
import React from "react";
import styled from "styled-components";
import { data } from "./makeLipsData";

type BlockContentData = {
  id: Number;
  content: String;
};

export default function Blocks() {
  const BlockContent = data.map((item: BlockContentData) => {
    return (
      <Block key={item.id}>
        <Text>{item.content}</Text>
      </Block>
    );
  });

  return <Container>{BlockContent}</Container>;
}

const Container = styled.div`
  display: flex;
  padding-top: 25px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Block = styled.div`
  background-color: rgba(160, 139, 128, 0.25);
  border: 1px solid #a08b80;
  border-radius: 5px;
  width: 200px;
  height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 20px;
  @media (max-width: 740px) {
    height: 50px;
    width: 300px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Text = styled.p`
  color: #030303;
  text-align: center;
  font-weight: 500;
`;
