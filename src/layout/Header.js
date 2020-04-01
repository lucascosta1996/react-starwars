import React from 'react'
import sw from '../assets/star-wars.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
  text-align: center;

  .title {
    margin: auto;
    max-width: 350px;
    transition: all .3s ease;
    width: 100%;

    &:hover {
      filter: drop-shadow(0px 0px 9px rgba(230,214,73,0.5));
    }

    @media (max-width: 520px) {
      max-width: 250px;
    }
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img className="title" src={sw} />
      </Link>
    </HeaderWrapper>
  )
}
