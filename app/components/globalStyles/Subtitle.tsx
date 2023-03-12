import React, { ReactNode } from "react";
import localFont from "next/font/local";
import styled from "styled-components";

const myFont = localFont({
  src: "./Dream_Orphans.otf",
  display: "swap",
});

type TitleProps = {
  color?: string | undefined,
  children: string,
  fontSize: number
}

export default function Subtitle({ children, fontSize, color }: TitleProps) {
  return (
    <H2 color={color} className={myFont.className} fontSize={fontSize}>
      {children}
    </H2>
  );
}

const H2 = styled.h1<{color: string | undefined, fontSize: number}>`
  color: ${(props) => props.color || "#CAB19D" };
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}pt` : '42pt')};
  @media (max-width: 740px) {
    font-size: ${(props) => (props.fontSize ? `${props.fontSize - 6}pt` : '36pt')};
  }
`;
