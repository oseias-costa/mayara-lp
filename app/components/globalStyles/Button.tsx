"use client";
import styled from "styled-components";

type ButtonProp = {
  primary: Boolean,
  href: string,
  content: string,

}

export default function Button({primary, href, content}: ButtonProp) {
  return <ButtonBody href={href} primary={primary}>{content}</ButtonBody>;
}

const ButtonBody = styled("a")<{primary: Boolean}>`
  background-color: ${props => props.primary ? '#cab19d' : '#030303' };
  color: ${props => props.primary ? '#030303' : '#f7f1ed' };
  font-weight: 600;
  border-radius: 3px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 7px;
  padding-bottom: 7px;
  border: 1px solid ${props => props.primary ? '#cab19d' : '#030303' };
  transition: 0.2s linear;
  cursor: pointer;
  font-size: 14pt;
  position: relative;
  top: 25px;
  text-decoration: none;

  &:hover {
    background-color: transparent;
    color: ${props => props.primary ? '#cab19d' : '#030303' };
  }

  @media (max-width: 740px) {
    text-align: center;
    font-size: 12pt;
    top: 5px;
    width: 90%;
  }
`;
