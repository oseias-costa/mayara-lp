"use client";
import React from 'react'
import styled from 'styled-components';
import { TitleSection } from '../globalStyles/TitleSection';
import BenefitsContent from './BenefitsContent';

export default function Benefits() {
  return (
    <BenefitsContainer id='Beneficios'>
      <Title>O que você vai adiquirir?</Title>
      <BenefitsContent />
    </BenefitsContainer>
  )
}

const BenefitsContainer = styled.section`
    background-color: #A08D80;
    padding-top: 60px;
    padding-bottom: 60px;
`

const Title = styled(TitleSection)`
  text-align: center;
  color: #f7f1ed;
`