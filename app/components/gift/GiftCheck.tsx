"use client";
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import Icon from '../../../public/checkbox.svg'
import { data } from './giftData'

type GiftCheckData = {
    id: number,
    title: string,
    content: string
}

export default function GiftCheck() {
    const checkbox = data.map((item: GiftCheckData) => {
        return(
            <Container key={item.id}>
                <Image src={Icon} alt='Checkbox Ok' width={20} height={20} />
                <TextContainer>
                    <TextCheck>{item.title}</TextCheck>
                    <Text>{item.content}</Text>
                </TextContainer>
            </Container>
        )
    })

  return (
        <GiftCheckContainer>{checkbox}</GiftCheckContainer>
  )
}

const GiftCheckContainer = styled.div`
     width: 700px;
     padding-top: 45px;
`

const Container = styled.div`
    display: flex;
    padding-top: 40px;
`

const TextContainer = styled.div`
    padding-left: 20px;
`

const TextCheck = styled.p`
  font-weight: 500;
  padding-bottom: 20px;
`

const Text = styled.p`
    font-weight: 300;
`