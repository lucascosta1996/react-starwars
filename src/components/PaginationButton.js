import React from 'react'
import styled from 'styled-components'

const PaginationButtonWrapper = styled.div`
  button {
    background-color: #000;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    height: 40px;
    margin: 5px;
    width: 40px;

    &:hover {
      background-color: #F2BD41; 
      box-shadow: 0px 0px 5px 1px #F2BD41;
      color: #1C1A09;
    }
  }

  .active {
    background-color: #F2BD41;
    box-shadow: 0px 0px 5px 1px #F2BD41;
    color: #1C1A09;
  }
`

export default function PaginationButton( { isActive, item, update, max } ) {
  if ( item < 1 || item > max ) return null

  return (
    <PaginationButtonWrapper>
      <button
        className={ isActive ? 'active' : '' }
        onClick={ update }
      >
        { item }
      </button>
    </PaginationButtonWrapper>
  )
}
