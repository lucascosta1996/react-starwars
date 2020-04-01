import React, { useContext } from 'react'
import styled from 'styled-components'
import { PaginationContext } from '../context/paginationContext'
import PaginationButton from './PaginationButton'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

export default function Pagination() {
  const context = useContext( PaginationContext )
  const count = context.count.get
  const pagesCount = Math.ceil( count / 10 )
  const pages = Array.from({ length: pagesCount }, (v, k) => k + 1 )
  const previous = context.current.get - 1
  const current = context.current.get
  const next = context.current.get + 1

  if ( context.loading.get ) return null

  return (
    <PaginationContext.Consumer>
      { ( context ) => {
        function updatePagination( item ) {
          context.current.set( item )
        }
        return (
          <PaginationWrapper>
            <PaginationButton item={ previous } isActive={ false } update={ () => updatePagination( previous ) } />
            <PaginationButton item={ current } isActive={ true } update={ () => updatePagination( current ) }/>
            <PaginationButton item={ next } isActive={ false } update={ () => updatePagination( next ) } max={ pagesCount } />
          </PaginationWrapper>
        )
    }}
    </PaginationContext.Consumer>
  )
}
