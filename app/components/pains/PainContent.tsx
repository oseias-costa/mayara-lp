import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { data } from './painsData'
import Image, { StaticImageData } from 'next/image'

type dataContent = {
    id: number,
    content: ReactNode,
    icon: StaticImageData
}

export default function PainContent() {
    const blocksPain = data.map((item: dataContent)=> {
        return(
            <Block key={item.id}>
                <Img src={item.icon} alt='Bloco' />
                {item.content}
            </Block>)
    })
    return <Container>{blocksPain}</Container>
}

const Container = styled.div`
    background-color: rgba(202, 177, 157, 0.25); 
    border: 1px solid #CAB19D;
    display: flex;
    border-radius: 5px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 20px;
    max-width: 820px;
    @media(max-width: 740px){
        flex-direction: column;
        align-items: flex-start;
    }
    `

const Img = styled(Image)`
    width: 67px;
    height: 60px;
`

const Block = styled.div`
    display: flex;
    align-items: center;
    max-width: 400px;
    padding: 28px;
`

