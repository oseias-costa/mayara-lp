"use client";
import React from 'react'
import styled from 'styled-components'
import Photo from "../../../public/makelips/eachLips.png"
import Image from 'next/image'

export default function BlockImage(){
    return(
        <div>
            <Image src={Photo} alt='Cada Lábio'>
        </div>
    )
}
