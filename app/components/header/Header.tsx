"use client";

import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/start/logo-dark2.svg'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderStyle>
        <Image src={Logo} alt='Logo Mayara Bechi' width={150} height={150} />
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
    left: 48%;
    top: -30px;
    position: absolute;
    z-index: 10;
    @media (max-width: 740px){
      left: 58%;

    }
`
