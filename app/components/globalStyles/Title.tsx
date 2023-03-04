import React from "react";
import localFont from "next/font/local";
import styled from "styled-components";

const myFont = localFont({
  src: "./Dream_Orphans.otf",
  display: "swap",
});

export default function Title({ text, destak }) {
  return (
    <H1 destak={destak} className={myFont.className}>
      {text}
    </H1>
  );
}

const H1 = styled.h1`
  position: relative;
  bottom: ${(props) => (props.destak ? "80px" : "36px")};
  color: ${(props) => (props.destak ? "#CAB19D" : "#f7f1ed")};
  font-size: 42pt;
  @media (max-width: 740px) {
    font-size: 30pt;
  }
`;
