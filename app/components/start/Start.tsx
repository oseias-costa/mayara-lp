"use client";

import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import StartImg from '../../../public/start.png'
import DescritptionStart from './DescritptionStart';

export default function Start() {
  return (
    <StartSection>
      <Image 
        src={StartImg} 
        alt='Imagem da Dra. Mayara Bechi' 
        width={400}
      />
      <DescritptionStart />
    </StartSection>
  )
}

const StartSection = styled.section`
  background-color: #030303;
`

const StartStyled = styled.h1`
    color: red;
    background-color: yellow;
`
