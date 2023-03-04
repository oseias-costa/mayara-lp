"use client";

import React from 'react'
import styled from 'styled-components'
import { P } from '../globalStyles/text';
import Title from '../globalStyles/Title';

export default function DescritptionStart() {
  return (
    <DescritptionContainer>
       <SubTitle>MÉTODO MAYARA BECHI</SubTitle>
       <Title />
    </DescritptionContainer>
  )
}

const DescritptionContainer = styled.div`

`
 const SubTitle = styled(P)`
    color: #fff;
    background-color: red;
 `

