"use client";

import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderStyle>
        <Image src={Logo} alt='Logo Mayara Bechi' width={150} height={150} />
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
`
