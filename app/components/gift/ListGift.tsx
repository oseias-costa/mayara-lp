import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { data } from "./giftData";

export default function ListGift() {
  const block = data.map((item) => {
    return (
      <BlockGift key={item.id}>
        <Img src={item.image} alt={item.title} />
        <Title>{item.title}</Title>
        <Text>{item.content}</Text>
      </BlockGift>
    );
  });
  return <Container>{block}</Container>;
}

const Container = styled.div`
  max-width: 400px;
  color: #f7f1ed;
  padding-left: 80px;
  @media (max-width: 740px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const BlockGift = styled.div`
  text-align: center;
  padding-top: 30px;
`;

const Img = styled(Image)`
  width: 180px;
  height: 125px;
`;
const Title = styled.p`
  font-size: 12pt;
  padding-bottom: 5px;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 10pt;
  padding-bottom: 20px;
  padding-top: 20px;
  font-weight: 300;
`;
