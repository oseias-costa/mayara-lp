import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from './learnData'

type LearnModulesProps = {
  id: number
  title: string
  content: string
}

export default function LearnModules() {
    const [ selected, setSelected ] = useState(1)

    const modulesCourse = data.map((item : LearnModulesProps) => {
        return(
            <>
            <Module key={item.id} onClick={() => setSelected(item.id)} select={selected} number={item.id}>
                <ModuleNumber>Módulo {item.id}</ModuleNumber>
                <Title>{item.title}</Title>
            </Module>
            <Content select={selected} number={item.id}>
                <Text select={selected} number={item.id}>{item.content}</Text>
            </Content>
            </>
        )
    })
  return (
    <Container id='LearnModules'>
        {modulesCourse}
    </Container>
  )
}

const Container = styled.div`
    padding: 50px;
`
const Module = styled("div")<{select : number, number: number}>`
    border: 1px solid #CAB19D;
    padding: 15px;
    max-width: 430px;
    cursor: pointer;
    background-color: ${props => props.select === props.number ? 'rgba(217,217,217, .12)' : 'transparent' };
`
const Content = styled("div")<{select : number, number: number}>`
    transition: all 0.3s ease;
    border: ${props => props.select === props.number ? ' 1px solid #CAB19D' : '0px' };;
    max-width: 430px;
    background-color: rgba(217,217,217, .12);
    opacity: ${props => props.select === props.number ? '100%' : '0%' };
    height: ${props => props.select === props.number ? '130px' : '0px' };
`

const ModuleNumber = styled.p`
    font-weight: 300;
    color: #F7F1ED;
`

const Title = styled.p`
    font-weight: 600;
    color: #F7F1ED;
`

const Text = styled("p")<{select : number, number: number}>`
    margin: ${props => props.select === props.number ? '15px' : '0' } ;
    font-size: 10pt;
    font-weight: 400;
    color: #F7F1ED;
    display: ${props => props.select === props.number ? 'block' : 'none' };
`