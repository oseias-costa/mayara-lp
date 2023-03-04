"use client";
import styled from "styled-components";

export default function ForWho() {
  return (
    <ForWhoContainer>
      <Title>Para quem é esse curso?</Title>
    </ForWhoContainer>
  );
}

const ForWhoContainer = styled.section`
  display: flex;
  flex-direction: collumn;
  justify-content: center;
`;

const Title = styled.p`
  color: #f7f1ed;
  font-size: 18pt;
  font-weight: 600;
`;
