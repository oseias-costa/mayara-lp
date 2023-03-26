"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { data } from "./learnData";

type LearnModulesProps = {
  id: number;
  title: string;
  content: string;
  height: string;
  background: StaticImageData,
  icon: StaticImageData
};

export default function LearnModules() {
  const [selected, setSelected] = useState<number>(0);

  const modulesCourse = data.map((item) => {
    return (
      <Block key={item.id}>
        <Img src={item.background} alt={item.title} layout='fill'/>
          <Module  select={selected} idModule={item.id}>
            <Btn onClick={() => setSelected(item.id)}>Ver Mais</Btn>
            <Icon src={item.icon} alt={item.title} />
            <ModuleNumber>Módulo {item.id}</ModuleNumber>
            <Title>{item.title}</Title>
          </Module>
          <Content select={selected} idModule={item.id} onClick={() => setSelected(0)}>
            <Text>{item.content}</Text>
          </Content>
        </Block>
    );
  });
  return <Container id="LearnModules">{modulesCourse}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  padding: 50px;
  @media (max-width: 740px) {
    padding: 20px;
  }
`;
const Block = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 0px;  
  height: 250px;
  width: 250px;
`;

const Module = styled("p")<{ select: number; idModule: number }>`
  display: ${(props) => (props.select === props.idModule ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
`

const Content = styled("div")<{ select: number; idModule: number }>`
  z-index: 1;
  display: ${(props) => (props.select === props.idModule ? "block" : "none")};
  @media (max-with: 740px) {
    
  }
`;

const ModuleNumber = styled.p`
  font-weight: 300;
  color: #f7f1ed;
  position: relative ;
  z-index: 1;
  /* top: 50px; */
  top: -50px;
  text-align: center;
  width: 250px;
`;

const Title = styled.p`
  font-weight: 600;
  color: #f7f1ed;
  width: 250px;
  z-index: 1;
  position: relative ;
  z-index: 1;
  /* top: 55px; */
  top: -45px;
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
`;

const Text = styled("p")`
  font-size: 10pt;
  font-weight: 400;
  color: #f7f1ed;
  padding: 30px;
  text-align: center;
`;

const Img = styled(Image)`
  height: 250px;
  width: 250px;
  z-index: 0;
`

const Icon = styled(Image)`
  height: 66px;
  width: 66px;
  z-index: 1;
  position: relative;
  top: 85px;
`

const Btn = styled.a`
  background: linear-gradient(180deg, #CAB19D 21.35%, rgba(202, 177, 157, 0.08) 100%);
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  top: 190px;
  font-weight: 600;
  cursor: pointer;
`