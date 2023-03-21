"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { data } from "./makeLipsData";

export default function Benefits() {
  const rows = data.map((item) => {
    return (
      <TextsContainer key={item.id}>
        <Img src={item.image} alt={item.content} />
        <Text>{item.content}</Text>
      </TextsContainer>
    );
  });
  return <Container>{rows}</Container>;
}

const Container = styled.div`
  @media (max-width: 740px) {
    padding-top: 25px;
  }
`;

const TextsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Text = styled("p")`
  color: #fff;
  font-size: 22pt;
  @media (max-width: 740px) {
    font-size: 16pt;
  }
`;

const Img = styled(Image)`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  @media (max-width: 740px) {
    width: 60px;
    height: 60px;
  }
`;
