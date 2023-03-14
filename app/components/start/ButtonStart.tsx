import React from 'react'
import styled from 'styled-components'
import ContainerDestak from '../globalStyles/ContainerDestak'

export default function ButtonStart() {
  return (
    <Link>
        <Container size='250px'>
            <Text>Quero começar agora!</Text>
        </Container>
    </Link>
  )
}

const Link = styled.a`
    position: relative;
    top: 25px;
    cursor: pointer;
    transition: 0.3 linear;
    
   
`
 const Container = styled(ContainerDestak)`
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

 `

const Text = styled.p`
    background: linear-gradient(180deg, #CAB19D 21.35%, rgba(202, 177, 157, 0.08) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding-left: 11px;
    padding-right: 11px;
    padding-top: 7px;
    padding-bottom: 7px;
    font-weight: 600;
    font-size: 14pt;
    text-align: center;
`