"use client";
import React from 'react'
import styled from 'styled-components';
import GiftCheck from './GiftCheck';
import GiftTop from './GiftTop';

export default function Gift() {
  return (
    <GiftContainer>
        <GiftTop />
        <Text>
            Como se não bastasse todo esse conteúdo sobre o método exclusivo Dra. Mayara Bechi, 
            você ainda receberá dois super bônus.
        </Text>
        <GiftCheck />
    </GiftContainer>
  )
}

const GiftContainer = styled.section`
    background-color: #F7F1ED;
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    font-weight: 600;
    width: 700px;
    padding-top: 20px;
    font-size: 14pt;
`