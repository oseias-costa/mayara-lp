"use client";
import styled from "styled-components";
import Subtitle from "../globalStyles/Subtitle";

export default function ForWho() {
  return (
    <ForWhoContainer id="forWho">
      <Subtitle fontSize={28}>Para quem é esse curso?</Subtitle>
        <Text>
          Esse curso é para você profissional atuante na HOF que deseja ser reconhecida(o) 
          como referência em preenchimento labial na sua região, aumentar a procura por esse 
          procedimento e ser muito bem paga pelas suas clientes por isso.
        </Text>
    </ForWhoContainer>
  );
}

const ForWhoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px
`;

/* const Title = styled.p`
  color: #cab19d;
  font-size: 22pt;
  font-weight: 700;
  @media(max-width: 740px){
    font-size: 18pt;
  }
`; */

const Text = styled.p`
  text-align: center; 
  font-size: 12pt;
  color: #f7f1ed;
  max-width: 800px;
  padding-top: 30px;
  @media(max-width: 740px){
    font-size: 10pt;
    padding-left: 40px;
    padding-right: 40px;
  }
`
