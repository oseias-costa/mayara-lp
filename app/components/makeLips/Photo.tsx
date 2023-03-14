"use client";
import React from "react";
import styled from "styled-components";
import Photo from "../../../public/makelips/eachLips.png";
import Image from "next/image";

export default function Benefits() {
  return (
    <Container>
      <Image src={Photo} alt="Cada lábio" />
      <TextsContainer>
        <Text bottom="130px" right="50px">
          Cada lábio tem sua anatomia
        </Text>
        <Text bottom="70px" right="20px">
          Cada rosto tem seus traços
        </Text>
        <Text bottom="-10px" right="10px">
          Cada cliente tem seus desejos
        </Text>
      </TextsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TextsContainer = styled.div`
  display: center;
`;

const Text = styled("p")<{ bottom: string; right: string }>`
  color: #fff;
  font-size: 18pt;
  position: relative;
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
`;
