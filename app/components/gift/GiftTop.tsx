import React from 'react'
import styled from 'styled-components'
import { TitleSection } from '../globalStyles/TitleSection'
import Icon from '../../../public/gift.png'
import Image from 'next/image'

export default function GiftTop() {
  return (
    <Container>
        <TitleSection>VOCÊ AINDA RECEBERÁ DE PRESENTE</TitleSection>
        <Img src={Icon} alt='Presente do Método Mayara Bechi' />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    width: 700px;
`

const Img = styled(Image)`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    position: relative;
    bottom: 4px;
`