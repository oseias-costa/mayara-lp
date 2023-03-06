import React from "react";
import localFont from "next/font/local";
import styled from "styled-components";

const myFont = localFont({
  src: "./Dream_Orphans.otf",
  display: "swap",
});

type TitleProps = {
  text: String,
  destak: boolean
}

export default function Title({ text, destak }: TitleProps) {
  return (
    <H1 destak={destak} className={myFont.className}>
      {text}
    </H1>
  );
}

const H1 = styled.h1<{destak: boolean}>`
  color: ${(props) => (props.destak ? "#CAB19D" : "#f7f1ed")};
  font-size: 42pt;
  @media (max-width: 740px) {
    font-size: 30pt;
  }
`;
