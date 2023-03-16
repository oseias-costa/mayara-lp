"use client";
import React from 'react'
import styled from 'styled-components';
import ContainerDestak from '../globalStyles/ContainerDestak';
import Subtitle from '../globalStyles/Subtitle';
import Checks from './Checks';

export default function InsecurityContent() {
  return (
    <ContainerDestak size='auto'>
    <Container>
        <Subtitle color='#F7F1ED' fontSize={26}>Chegou o momento de acabar com a insegurança e dominar o preenchimento labial</Subtitle>
        <Text>Conhecimento e confiança na sua técnica é o que te faz virar a chave de um profissional mediano para um especialista em esculpir lábios.</Text>
        <Sub>Os mínimos detalhes fazem a diferença, desde a:</Sub>
        <Checks />
    </Container>
    </ContainerDestak>
  )
}

const Container = styled.div`
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 200px;
    max-width: 880px;
    color: #F7F1ED;
`

// const Title = styled(TitleSection)`
//     color: #030303;
//     font-size: 20pt;
//     font-weight: 600;
//     padding-bottom: 20px;
//     @media(max-width: 740px){
//         font-size: 17pt;
//     }
// `

const Text = styled.p`
    font-size: 12pt;
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 300;
`

const Sub = styled.p`
    font-size: 14pt;
    font-weight: 500;
    padding-bottom: 15px;
`