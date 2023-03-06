import { type } from 'os'
import React from 'react'

type PainSvgProps = {
  size: string
}

export default function PainSvg({size}: PainSvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="#A08D80">
        <rect width={size} height={size} rx="5"/>
    </svg>
  )
}
