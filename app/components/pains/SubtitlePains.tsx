"use client";
import React from 'react'
import styled from 'styled-components';

export default function SubtitlePains() {
  return (
    <Row>
        <SubTitle color='#f7f1ed'>É possível dar um</SubTitle> 
        <SubTitle color='#cab19d'>START</SubTitle> 
        <SubTitle color='#f7f1ed'>na sua carreira, se você:</SubTitle> 
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const SubTitle = styled.p`
    color: ${props => props.color};
    display: inline;
    font-size: 14pt;
    font-weight: 500;
    padding: 3px;
`