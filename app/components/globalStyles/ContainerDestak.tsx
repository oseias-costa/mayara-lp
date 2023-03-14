"use client";
import { ReactNode } from "react";
import styled from "styled-components";

export default function ContainerDestak({size, children}:{children : ReactNode, size: string}) {
  return( 
    <Border size={size}>
      <Background>
        <Container>
          {children}
        </Container>
      </Background>
    </Border>
    )
}

const Border = styled("div")<{size: string}>`
  background: linear-gradient(180deg, #CAB19D 13.54%, rgba(202, 177, 157, 0.1) 100%);
  padding: 5px;
  border-radius: 8px;
  width: ${props => props.size};
`
const Background = styled.div`
  background-color: #111010;
  border-radius: 5px;
`

const Container = styled.div`
  background-color: #111010;
  background: radial-gradient(133.89% 123.53% at -11.3% -13.31%, rgba(202, 177, 157, 0.3) 0%, rgba(202, 177, 157, 0) 100%);
  border-width: 0px;
  border-style: solid;
  border-color: transparent;
  border-radius: 5px;
`;
