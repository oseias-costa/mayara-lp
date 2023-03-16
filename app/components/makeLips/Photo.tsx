"use client";
import React from "react";
import styled from "styled-components";
import Photo from "../../../public/makelips/eachLips.png";
import Image from "next/image";

export default function Benefits() {
  const size = window !== undefined && window.screen.width > 740 

  const sizes = {
    first : {
      bottom: size ? '140px' : '30px',
      right: size ? '70px' : '25px'
    },
    second : {
      bottom: size ? '80px' : '15px',
      right: size ? '50px' : '22px'
    },
    third : {
      bottom: size ? '0px' : '0px',
      right: size ? '40px' : '20px'
    }
  }
  
  return (
    <Container>
      <Img src={Photo} alt="Lábios - Método Mayara Bechi" />
      <TextsContainer>
        <Text bottom={sizes.first.bottom} right={sizes.first.right}>
          Cada lábio tem sua anatomia
        </Text>
        <Text bottom={sizes.second.bottom} right={sizes.second.right}>
          Cada rosto tem seus traços
        </Text>
        <Text bottom={sizes.third.bottom} right={sizes.third.right}>
          Cada cliente tem seus desejos
        </Text>
      </TextsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: 740px){
    padding-top: 25px;
  }
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
  @media (max-width: 740px){
    font-size: 10pt;
  }
`;

const Img = styled(Image)`
  width: 678px;
  height: 507px;
  @media (max-width: 740px){
    width: 250px;
    height: 188px;
  }
`