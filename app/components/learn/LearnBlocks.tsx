"use client";
import React from 'react'
import styled from 'styled-components';
import { data } from './learnData';

type LearnBlocksData = {
    id: number,
    title: String,
    content: String
}

export default function LearnBlocks() {
    const block = data.map((item: LearnBlocksData) => {
        return(
            <Block key={item.id}>
                <Module>Módulo {item.id}</Module>
                <Title>{item.title}</Title>
                <Content>{item.content}</Content>
            </Block>
        )
    })
  return (
    <Container>{block}</Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1080px;
    padding-top: 40px;
`

const Block = styled.div`
    background-color: rgba(202, 177, 157, 0.25);
    border: 1px solid #CAB19D;
    border-radius: 5px;
    width: 300px;
    height: 250px;
    padding: 20px;
    margin: 10px;
`

const Module = styled.p`
    color: #CAB19D;
`

const Title = styled.p`
    color: #F7F1ED;
    font-weight: 600;
`

const Content = styled.p`
    color: #F7F1ED;
    font-weight: 300;
    font-size: 10pt;
    padding-top: 10px;
`