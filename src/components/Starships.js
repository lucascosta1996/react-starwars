import React from 'react'
import StarshipCard from './StarshipCard'
import styled from 'styled-components'

const StarshipsTitle = styled.span`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`

const StarshipListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StarshipWrapper = styled.div`
  .starships-header {
    border-bottom: 1px solid #fff;
    margin-bottom: 28px;
    padding-bottom: 8px;
  }
`

export default function Starships( { starships } ) {
  if ( starships.length < 1 ) return <StarshipsTitle>This character doesn't have any starships</StarshipsTitle>

  return (
    <StarshipWrapper>
      <header className="starships-header">
        <StarshipsTitle>
          Starships
        </StarshipsTitle>
      </header>
      <StarshipListWrapper>
        { starships.length > 0 && starships.map( item => (
          <StarshipCard key={ item } url={ item } />
        ) ) }
      </StarshipListWrapper>
    </StarshipWrapper>
  )
}