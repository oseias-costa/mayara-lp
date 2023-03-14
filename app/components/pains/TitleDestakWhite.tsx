import React from "react";
import localFont from "next/font/local";
import styled from "styled-components";

const myFont = localFont({
  src: "../globalStyles/Dream_Orphans.otf",
  display: "swap",
});

type TitleProps = {
  text: string;
  fontSize: number;
};

export default function TitleDestakWhite({ text, fontSize }: TitleProps) {
  return (
    <H1 className={myFont.className} fontSize={fontSize}>
      {text}
    </H1>
  );
}

const H1 = styled.h2<{ fontSize: number }>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}pt` : "42pt")};
  background: linear-gradient(
    180deg,
    #ffffff 21.35%,
    rgba(202, 177, 157, 0.08) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 740px) {
    font-size: ${(props) =>
      props.fontSize ? `${props.fontSize - 6}pt` : "36pt"};
  }
`;
