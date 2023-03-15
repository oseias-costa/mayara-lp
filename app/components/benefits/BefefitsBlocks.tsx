"use client";
import React from 'react'
import styled from 'styled-components';
import TitleDestak from '../globalStyles/TitleDestak';
import { data } from './benefitsData';

type ItemData = {
    id: number,
    content: string,
    negrito: string
    
}

export default function BefefitsBlocks() {
    const block = data.map((item : ItemData)  => {
        return(
            <BlockItem key={item.id}>
                <NumberList>
                    <TitleDestak fontSize={50} text={item.id} />
                </NumberList>
                <BlockText>
                    <Negrito>{item.negrito}</Negrito>
                    <Text>{item.content}</Text>
                </BlockText>
            </BlockItem>
        )
    })
  return (
    <Container>{block}</Container>
  )
}

const Container = styled.div`
    padding: 45px;
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
    padding: 5px;
    @media (max-width: 740px){
        padding: 10px;
        display: block;
        width: 150px;
    }
`

const NumberList = styled.div`
    width: 80px;
    text-align: center;
`

const BlockText = styled.div`
    max-width: 300px;
    padding-left: 20px;
`

const Text = styled.p`
    color: #F7F1ED;
    font-size: 16pt;
    display: inline;
    @media (max-width: 740px){
        padding-left: 0;
        padding-top: 5px;
        font-size: 10pt;
        text-align: center;
    }
`

const Negrito = styled(Text)`
    font-weight: 600;
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