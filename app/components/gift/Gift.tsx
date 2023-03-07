"use client";
import React from "react";
import styled from "styled-components";
import GiftCheck from "./GiftCheck";
import GiftTop from "./GiftTop";
import Image from "next/image";
import Photo from "../../../public/mockups.png";
import Price from "../price/Price";

export default function Gift() {
  return (
    <GiftContainer>
      <GiftTop />
      <Text>
        Como se não bastasse todo esse conteúdo sobre o método exclusivo Dra.
        Mayara Bechi, você ainda receberá dois super bônus.
      </Text>
      <GiftCheck />
      <Img src={Photo} alt="Bônus Método Mayara Bechi" />
      <Price />
    </GiftContainer>
  );
}

const GiftContainer = styled.section`
  background-color: #f7f1ed;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-weight: 600;
  width: 700px;
  padding-top: 20px;
  font-size: 14pt;
  @media (max-width: 740px) {
    width: 300px;
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 13pt;
  }
`;

const Img = styled(Image)`
  width: 400px;
  height: 204px;
  margin-top: 40px;
  @media (max-width: 500px) {
    width: 300px;
    height: 153px;
    margin-top: 20px;
  }
`;
