"use client";
import React from 'react'
import styled from 'styled-components';
import Subtitle from '../globalStyles/Subtitle';

export default function SubtitlePains() {
  return (
    <Row>
        <Subtitle fontSize={25} color='#f7f1ed'>É possível dar um</Subtitle> 
        <Subtitle fontSize={25} color='#cab19d'>&nbsp;START&nbsp;</Subtitle> 
        <Subtitle fontSize={25} color='#f7f1ed'>na sua carreira, se você:</Subtitle> 
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const SubTitle = styled.p`
    color: ${props => props.color};
    display: inline;
    font-size: 14pt;
    font-weight: 500;
    padding: 3px;
`