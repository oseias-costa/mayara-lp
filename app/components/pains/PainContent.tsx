import React from 'react'
import styled from 'styled-components'
import { data } from './painsData'
import PainSvg from './pain.svg'
import Image from 'next/image'

type dataContent = {
    id: number,
    content: String
}

export default function PainContent() {
    const blocksPain = data.map((item: dataContent)=> {
        return(
            <Block key={item.id}>
                <Image src={PainSvg} alt='Bloco' width={20} />
                <Text>{item.content}</Text>
            </Block>)
    })
    return <Container>{blocksPain}</Container>
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 600px;
    @media(max-width: 740px){
        flex-direction: column;
        align-items: flex-start;
    }
    `

const Block = styled.div`
    display: flex;
    max-width: 300px;
    padding-top: 20px;
`

const Text = styled.p`
    padding-left: 10px;
    color: #f7f1ed;
    font-weight: 300;
    font-size: 10pt;
    position: relative;
    bottom: 3px;
`