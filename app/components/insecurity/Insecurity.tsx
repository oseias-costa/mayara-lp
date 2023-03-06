"use client";
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import Photo from '../../../public/insecurity.png'
import InsecurityContent from './InsecurityContent';

export default function Insecurity() {
  return (
    <InsecurityContainer>
        <InsecurityContent />
        <Img src={Photo} alt='Método Mayara Bechi' />
    </InsecurityContainer>
  )
}

const InsecurityContainer = styled.section`
    display: flex;
    background-color: #E5D5CA;
    justify-content: center;
    flex-wrap: wrap;
    @media(max-width: 740px){
      padding-left: 20px;
      padding-right: 20px;
    }
`

const Img = styled(Image)`
    width: 333px;
    height: 500px;
`