"use client";
import React from "react";
import styled from "styled-components";
import GiftCheck from "./GiftCheck";
import GiftTop from "./GiftTop";
import Image from "next/image";
import Photo from "../../../public/mockups.png";
import Price from "../price/Price";
import GiftTitle from "./GiftTitle";
import ListGift from "./ListGift";

export default function Gift() {
  return (
    <GiftContainer id="Presente">
      <GiftTitle />
      <ListGift />
    </GiftContainer>
  );
}

const GiftContainer = styled.section`
  padding-top: 60px;
  padding-bottom: 20px;
  display: flex;
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
