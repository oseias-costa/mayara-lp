"use client";
import styled from "styled-components";

export default function Button() {
  return <ButtonBody>Quero começar agora!</ButtonBody>;
}

const ButtonBody = styled.a`
  background-color: #cab19d;
  color: #030303;
  position: relative;
  bottom: 85px;
  font-weight: 600;
  border-radius: 3px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 7px;
  padding-bottom: 7px;
  border: 1px solid #cab19d;
  transition: 0.2s linear;
  cursor: pointer;
  font-size: 14pt;

  &:hover {
    background-color: #030303;
    color: #cab19d;
  }

  @media (max-width: 740px) {
    font-size: 8pt;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
