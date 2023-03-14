import React, { ReactNode } from "react";
import styled from "styled-components";
import { data } from "./painsData";
import Image, { StaticImageData } from "next/image";
import ContainerDestak from "../globalStyles/ContainerDestak";

type dataContent = {
  id: number;
  content: ReactNode;
  icon: StaticImageData;
};

export default function PainContent() {
  const blocksPain = data.map((item: dataContent) => {
    return (
      <Block key={item.id}>
        <Img src={item.icon} alt="Bloco" />
        {item.content}
      </Block>
    );
  });
  return (
    <ContainerDestak size="1080px">
      <Container>{blocksPain}</Container>
    </ContainerDestak>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Img = styled(Image)`
  width: 67px;
`;

const Block = styled.div`
  max-width: 250px;
  padding: 10px;
  text-align: center;
`;
