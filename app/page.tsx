"use client";

import { Inter } from "next/font/google";
import Start from "./components/start/Start";
import Header from "./components/header/Header";
import ForWho from "./components/forWho/ForWho";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Header />
      <Start />
      <ForWho />
    </Container>
  );
}

const Container = styled.main`
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #030303;
`;
