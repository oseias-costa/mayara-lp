"use client";
import React from "react";
import styled from "styled-components";
import GiftTitle from "./GiftTitle";
import ListGift from "./ListGift";

export default function Gift() {
  return (
    <GiftContainer id="gift">
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
  flex-wrap: wrap;
  @media (max-width: 740px) {
    padding-top: 0px;
  }
`;
