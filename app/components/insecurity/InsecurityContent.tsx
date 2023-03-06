"use client";
import React from 'react'
import styled from 'styled-components';
import Button from '../globalStyles/Button';
import { TitleSection } from '../globalStyles/TitleSection';
import Checks from './Checks';

export default function InsecurityContent() {
  return (
    <Container>
        <Title>CHEGOU O MOMENTO DE ACABAR COM A INSEGURANÇA E  DOMINAR O PREENCHIMENTO LABIAL!</Title>
        <Text>Conhecimento e confiança na sua técnica é o que te faz virar a chave de um profissional mediano para um especialista em esculpir lábios.</Text>
        <Subtitle>Os mínimos detalhes fazem a diferença, desde a:</Subtitle>
        <Checks />
        <Button primary={false} href='#' content='Quero ter segurança ao fazer lábios!'/>
    </Container>
  )
}

const Container = styled.div`
    padding-top: 60px;
    max-width: 450px;
`

const Title = styled(TitleSection)`
    color: #030303;
    font-size: 20pt;
    font-weight: 600;
    padding-bottom: 20px;
    @media(max-width: 740px){
        font-size: 17pt;
    }
`

const Text = styled.p`
    font-size: 12pt;
    padding-bottom: 20px;
    font-weight: 300;
`

const Subtitle = styled.p`
    font-size: 14pt;
    font-weight: 500;
    padding-bottom: 15px;
`