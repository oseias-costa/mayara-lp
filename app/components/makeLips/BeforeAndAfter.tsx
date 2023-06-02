"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Img1 from "../../../public/makelips/1.webp";
import Img2 from "../../../public/makelips/2.webp";
import Img3 from "../../../public/makelips/3.webp";
import Img4 from "../../../public/makelips/4.webp";
import Previus from "../../../public/makelips/previus.webp";
import Next from "../../../public/makelips/next1.webp";

const dataImg = [Img1, Img2, Img3, Img4];

export default function BeforeAndAfter() {
  const [ imageNumber, setImageNumber ] = useState(1)
  const swiper: React.MutableRefObject<HTMLDivElement | null | undefined> = useRef()

  const BlockImg = dataImg.map((item: StaticImageData, index: number) => {
    return (
      <Img
        key={index}
        src={item}
        alt="Antes e Depois Método Mayara Bechi"
      />
    );
  });
  return (
      <ImgContainer>
        <div className='swiper' ref={swiper}>
        {BlockImg}
        </div>

        <Buttons>

        <a onClick={() => {
          if(swiper && swiper.current){
            swiper.current.scrollLeft -= 1000
          }
          setImageNumber(1)
        }}><Arrow src={Previus} alt='next' image={1} imgSelected={imageNumber} /></a>
      <a onClick={() => {
        if(swiper && swiper.current){
          swiper.current.scrollLeft += 1000
        }
        setImageNumber(2)
      }}>
        <Arrow src={Next} alt='next' image={2} imgSelected={imageNumber} />
      </a>
        </Buttons>
      </ImgContainer>);
}

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  
  .swiper{
    width: 840px;
    display: flex;
    scroll-behavior: smooth;
    overflow-x: scroll;
    overflow: hidden;
    
      @media(max-width: 740px){
        width: 340px;
      }
    }
`;

const Img = styled(Image)`
  margin: 10px;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 40px #111010);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  width: 400px;
  height: 400px;

  @media (max-width: 720px){
    width: 150px;
    height: 150px;

}
`;

const Arrow = styled(Image)<{ image?: number, imgSelected: number }>`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 0.3s linear;
  filter: ${ props => props.image === props.imgSelected ? `opacity(30%)` : `opacity(100%)`};
  margin: 5px;

  @media(max-width: 740px) {
    width: 30px;
    height: 30px;
  }
`

const Buttons = styled.div`
  display: flex;
`