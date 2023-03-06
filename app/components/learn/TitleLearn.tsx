"use client";
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import Icon from '../../../public/Learning.svg'
import { TitleSection } from '../globalStyles/TitleSection';

export default function TitleLearn() {
  return (
    <Container>
        <IconLearn src={Icon} alt='Método Mayara Bechi' />
        <div>
            <Title>TUDO QUE VOCÊ IRÁ APRENDER</Title>
            <Subtitle>São 8 módulos + Bônus</Subtitle>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 740px){
        flex-direction: column;
     }
`
const IconLearn = styled(Image)`
    width: 90px;
    height: 90px;
    margin-right: 30px;
    @media (max-width: 740px){
        width: 60px;
        height: 60px;
    }
`

const Title = styled(TitleSection)`
    color: #A08D80;
    @media (max-width: 740px){
        font-size: 14pt;
    }
`

const Subtitle = styled.p`
    color: #F7F1ED;
    font-size: 20pt;
    font-weight: 500;
    @media (max-width: 740px){
        font-size: 14pt;
    }
`