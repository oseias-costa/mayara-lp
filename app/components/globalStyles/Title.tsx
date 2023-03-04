import React from 'react'
import localFont from 'next/font/local';
import styled from 'styled-components';

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './Dream_Orphans.otf',
  display: 'swap'
});

export default function Title() {
  return (
    <div className={myFont.className}>Esculpindo Labios Perfeitos</div>
  )
}

const H1 = styled.h1`
    color: #fff;
    font-size: 42pt;
`