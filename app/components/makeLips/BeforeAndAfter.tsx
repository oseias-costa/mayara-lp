"use client";
import Image, { StaticImageData } from 'next/image';
import React from 'react'
import styled from 'styled-components';
import Img1 from "../../../public/makeLipsImg1.png"
import Img2 from "../../../public/makeLipsImg2.png"
import Img3 from "../../../public/makeLipsImg3.png"

const dataImg = [Img1, Img2, Img3]

export default function BeforeAndAfter() {
    const BlockImg = dataImg.map((item: StaticImageData, index: number) => {
        return(
            <Img 
                key={index} 
                src={item} alt='Antes e Depois Método Mayara Bechi' 
                width={200}
                height={228}
            />)
    })
  return (
    <ImgContainer>{BlockImg}</ImgContainer>
  )
}

const ImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
`

const Img = styled(Image)`
    margin: 20px;
    border: 1px solid #A08B80;
    border-radius: 5px;
`

