"use client";
import Start from "./components/start/Start";
import Header from "./components/header/Header";
import styled from "styled-components";
import Pains from "./components/pains/Pains";
import MakeLips from "./components/makeLips/MakeLips";
import Benefits from "./components/benefits/Benefits";
import Learn from "./components/learn/Learn";
import Insecurity from "./components/insecurity/Insecurity";
import Gift from "./components/gift/Gift";
import Price from "./components/price/Price";
import Warranty from "./components/warranty/Warranty";
import Testimonials from "./components/testimonials/Testimonials";

export default function Home() {
  return (
    <Container>
      <Header />
      <Start />
      <Pains />
      <MakeLips />
      <Benefits />
      <Learn />
      <Insecurity />
      <Gift />
      <Price />
      <Warranty />
      <Testimonials />
    </Container>
  );
}

const Container = styled.main`
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #111010;
`;
