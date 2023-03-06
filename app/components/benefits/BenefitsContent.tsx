"use client";
import React from 'react'
import Image from 'next/image';
import BefefitsBlocks from './BefefitsBlocks';
import Img from '../../../public/benefits__img.png'
import styled from 'styled-components';

export default function BenefitsContent() {
  return (
    <Content>
        <BefefitsBlocks />
        <ImageBenefits src={Img} alt='Método Mayara Bechi' />
      </Content>
  )
}

const ImageBenefits = styled(Image)`
  height: 500px;
  width: 431.5px;
  position: relative;
  top: 60px;
  right: 150px;
  @media (max-width: 740px){
    height: 270px;
    width: 233px;
    right: 0;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`