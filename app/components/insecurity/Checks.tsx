"use client";
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import Icon from '../../../public/insecurity/insecurity-check.png'

export default function Checks() {
  return (
    <div>
        <Container>
            <Image src={Icon} alt='Checkbox Ok' width={24} height={24}  />
            <TextCheck>Escolha instrumental correta</TextCheck>
        </Container>
        <Container>
            <Image src={Icon} alt='Checkbox Ok' width={24} height={24} />
            <TextCheck>Como acomodar o produto nos lábios</TextCheck>
        </Container>
    </div>
  )
}

const Container = styled.div`
    display: flex;
    padding-top: 5px;
    align-items: center;
`

const TextCheck = styled.p`
  font-weight: 300;
  padding-left: 24px;
  font-size: 14pt;
`