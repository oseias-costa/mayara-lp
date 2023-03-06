"use client";
import React from 'react'
import styled from 'styled-components';
import { data } from './benefitsData';

type ItemData = {
    id: number,
    content: String
}

export default function BefefitsBlocks() {
    const block = data.map((item: ItemData) => {
        return(
            <BlockItem key={item.id}>
                <Title>{'#'+item.id}</Title>
                <Text>{item.content}</Text>
            </BlockItem>
        )
    })
  return (
    <Container>{block}</Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    justify-content: center;
    padding-left: 150px;
    @media (max-width: 740px){
        padding-left: 0;
        max-width: auto;
        position: relative;
        top: 45px;
    }
`
const BlockItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(202, 177, 157, 0.25);
    border: 1px solid #CAB19D;
    border-radius: 5px;
    width: 300px;
    height: 120px;
    padding: 20px;
    margin: 10px;
    @media (max-width: 740px){
        padding: 10px;
        display: block;
        width: 150px;
    }
`

const Text = styled.p`
    color: #F7F1ED;
    padding-left: 20px;
    @media (max-width: 740px){
        padding-left: 0;
        padding-top: 5px;
        font-size: 10pt;
        text-align: center;
    }
`

const Title = styled.p`
    font-size: 22pt;
    font-weight: 600;
    color: #F7F1ED;
    @media (max-width: 740px){
        font-size: 16pt;
        text-align: center;
    }
`