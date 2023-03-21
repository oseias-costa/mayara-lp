"use client";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { data } from "./learnData";

type LearnModulesProps = {
  id: number;
  title: string;
  content: string;
  height: string;
};

export default function LearnModules() {
  const [selected, setSelected] = useState(1);

  const modulesCourse = data.map((item: LearnModulesProps) => {
    return (
      <div key={item.id}>
        <Module
          style={{ background: "url(../../../public/learn/module1.png)" }}
        >
          <ModuleNumber>Módulo {item.id}</ModuleNumber>
          <Title>{item.title}</Title>
        </Module>
        {/* <Content select={selected} number={item.id} height={item.height}>
          <Text select={selected} number={item.id}>
            {item.content}
          </Text>
        </Content> */}
      </div>
    );
  });
  return <Container id="LearnModules">{modulesCourse}</Container>;
}

const Container = styled.div`
  padding: 50px;
  @media (max-width: 740px) {
    padding: 40px;
  }
`;
const Module = styled("div")`
  border: 1px solid #cab19d;
  padding: 15px;
  max-width: 430px;
  cursor: pointer;
`;
const Content = styled("div")<{
  select: number;
  number: number;
  height: string;
}>`
  transition: all 0.3s ease;
  border: ${(props) =>
    props.select === props.number ? " 1px solid #CAB19D" : "0px"};
  max-width: 430px;
  background-color: rgba(217, 217, 217, 0.12);
  opacity: ${(props) => (props.select === props.number ? "100%" : "0%")};
  height: ${(props) => (props.select === props.number ? "auto" : "0px")};
  @media (max-with: 740px) {
    height: ${(props) => (props.select === props.number ? "auto" : "0px")};
  }
`;

const ModuleNumber = styled.p`
  font-weight: 300;
  color: #f7f1ed;
`;

const Title = styled.p`
  font-weight: 600;
  color: #f7f1ed;
`;

const Text = styled("p")<{ select: number; number: number }>`
  margin: ${(props) => (props.select === props.number ? "15px" : "0")};
  font-size: 10pt;
  font-weight: 400;
  color: #f7f1ed;
  display: ${(props) => (props.select === props.number ? "block" : "none")};
`;
