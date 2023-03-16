import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { data } from './giftData'

export default function ListGift() {
    const block = data.map(item => {
        return(
            <BlockGift key={item.id}>
                <Img src={item.image} alt={item.title} />
                <Title>{item.title}</Title>
                <Text>{item.content}</Text>
            </BlockGift>
        )
    })
  return <Container>{block}</Container>
}

const Container = styled.div`

`

const BlockGift = styled.div`
    
`

const Img = styled(Image)`
   width: 200px;
   height: 166px;
`
const Title = styled.p`
    font-size: 11pt;
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 500;
`

const Text = styled.p`
    font-size: 9pt;
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 300;
`