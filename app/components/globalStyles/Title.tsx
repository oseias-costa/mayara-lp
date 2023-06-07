import React from "react";
import localFont from "next/font/local";
import styled from "styled-components";

const myFont = localFont({
  src: "./Dream_Orphans.otf",
  display: "swap",
});

type TitleProps = {
  text: string,
  destak: boolean,
  fontSize?: number
}

export default function Title({ text, destak, fontSize }: TitleProps) {
  return (
    <H1 destak={destak} className={myFont.className}  fontSize={fontSize}>
      {text}
    </H1>
  );
}

const H1 = styled.h1<{destak: boolean, fontSize?: number}>`
  color: ${(props) => (props.destak ? "#CAB19D" : "#f7f1ed")};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}pt` : '42pt')};
  @media (max-width: 740px) {
    font-size: ${(props) => (props.fontSize ? `${props.fontSize - 15}pt` : '32pt')};
  }
`;
