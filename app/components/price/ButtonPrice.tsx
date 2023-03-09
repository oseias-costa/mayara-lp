"use client";
import React from 'react'
import styled from 'styled-components'

export default function ButtonPrice(){
    return(
        
    )
}

const Container = styled.button`
  background-color: '#030303' };
  color: ${props => props.primary ? '#030303' : '#f7f1ed' };
  font-weight: 600;
  border-radius: 3px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 7px;
  padding-bottom: 7px;
  border: 1px solid ${props => props.primary ? '#cab19d' : '#030303' };
  transition: 0.2s linear;
  cursor: pointer;
  font-size: 14pt;
  position: relative;
  top: 25px;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.primary ? '#030303' : '#cab19d' };
    color: ${props => props.primary ? '#cab19d' : '#030303' };
  }

  @media (max-width: 740px) {
    font-size: 8pt;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`