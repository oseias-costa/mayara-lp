"use client";
import React from 'react'
import styled from 'styled-components'

export default function ButtonPrice({children}: any){
    return(
        <Container>{children}</Container>
    )
}

const Container = styled.button`
  width: 250px;
  background-color: #cab19d;
  color: #030303;
  font-weight: 600;
  border-radius: 3px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 7px;
  padding-bottom: 7px;
  border: 1px solid #cab19d;
  transition: 0.2s linear;
  cursor: pointer;
  font-size: 14pt;
  position: relative;
  top: 15px;
  text-decoration: none;
  margin-bottom: 40px;
  &:hover {
    background-color:  transparent ;
    color: #030303;
  }

  @media (max-width: 740px) {
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`