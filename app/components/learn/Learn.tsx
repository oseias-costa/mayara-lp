"use client";
import React from 'react'
import styled from 'styled-components';
import Bonus from './Bonus';
import LearnBlocks from './LearnBlocks';
import TitleLearn from './TitleLearn';

export default function Learn() {
  return (
    <LearnContainer>
        <TitleLearn />
        <LearnBlocks />
        <Bonus />
    </LearnContainer>
  )
}

const LearnContainer = styled.section`
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`