"use client";
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import Icon from '../../../public/checkbox.svg'

export default function Checks() {
  return (
    <div>
        <Container>
            <Image src={Icon} alt='Checkbox Ok' width={20} height={20}  />
            <TextCheck>Escolha instrumental correta</TextCheck>
        </Container>
        <Container>
            <Image src={Icon} alt='Checkbox Ok' width={20} height={20} />
            <TextCheck>Como acomodar o produto nos lábios</TextCheck>
        </Container>
    </div>
  )
}

const Container = styled.div`
    display: flex;
    padding-top: 5px;
    &:last-of-type{
      padding-bottom: 15px;
    }
`

const TextCheck = styled.p`
  font-weight: 500;
  padding-left: 10px;
`