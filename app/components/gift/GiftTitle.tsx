import React from 'react'
import styled from 'styled-components'
import Subtitle from '../globalStyles/Subtitle'
import Icon from '../../../public/gift/gift.png'
import Image from 'next/image'

export default function GiftTitle() {
  return (
    <Container>
        <Img src={Icon} alt='Presente Método Mayara Bechi' />
        <Subtitle color='#F7F1ED' fontSize={26}>Você ainda receberá de Presente</Subtitle>
        <Text>Como se não bastasse todo esse conteúdo sobre o método exclusivo Dra. Mayara Bechi, você ainda receberá dois super bônus.</Text>
    </Container>
  )
}

const Container = styled.div`
    max-width: 300px;
`
const Img = styled(Image)`
    width: 50px;
    height: 50px;
    position: relative;
    right: 10px;
`

const Text = styled.p`
    font-size: 12pt;
    padding-bottom: 20px;
    padding-top: 20px;
    font-weight: 300;
    color: #f7f1ed;
`