import React from "react";
import styled from "styled-components";
import ContainerDestak from "./ContainerDestak";

 type ButtonGradProps = {
  text: string
  href: string
 }

export default function ButtonGrad({ text, href }: ButtonGradProps) {
  return (
    <Link href={href} target='_blank'>
      <Container>
        <ContainerDestak size="auto">
          <Text>{text}</Text>
        </ContainerDestak>
      </Container>
    </Link>
  );
}

const Link = styled.a`
  position: relative;
  top: 25px;
  cursor: pointer;
  transition: 0.3 linear;
  text-decoration: none;
`;
const Container = styled.div`
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 740px) {
    width: auto;
  }
`;

const Text = styled.p`
  /* background: linear-gradient(
    180deg,
    #cab19d 21.35%,
    rgba(202, 177, 157, 0.08) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; */
  color: #fff;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-weight: 600;
  font-size: 14pt;
  text-align: center;
  @media(max-width: 740px){
      font-size: 16pt;
    }
`;
