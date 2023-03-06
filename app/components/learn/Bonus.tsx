"use client";
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import Icon from '../../../public/bonus.svg'

export default function Bonus() {
  return (
    <Container>
      <IconSvg src={Icon} alt='Bônus Método Mayara Bechi' />
      <div>
        <Text>Auxílio de orçamento para pacientes</Text>
        <Text>Como e quando aplicar SKINBOOSTER nos lábios</Text>
      </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 30px;
    @media (max-width: 740px){
      margin-left: 30px;
      margin-right: 30px;
    }
`

const Text = styled.p`
    color: #F7F1ED;
    font-size: 16pt;
    font-weight: 500;
    @media (max-width: 740px){
      text-align: center;
      font-size: 12pt;
      &:first-of-type{
        padding-top: 15px;
      }
    }
`

const IconSvg = styled(Image)`
    width: 60px;
    height: 60px;
    margin-right: 30px;
    margin-left: 30px;
`