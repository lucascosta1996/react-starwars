import React from 'react'
import useStarship from '../utils/useStarship'
import styled from 'styled-components'

const StarshipCardWrapper = styled.div`
  background-color: #202226;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 20px;
  width: 270px;

  h3 {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 18px;
  }

  .starship-info-wrapper {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 20px;

    .label {
      color: #fff;
      font-weight: 500;
    }

    .content {
      color: #E6D649;
      font-weight: 400;
      padding-left: 5px;
    }
  }
`

export default function StarshipCard( { url } ) {
  const { starship } = useStarship( url )

  if ( starship === undefined ) return null

  return (
    <StarshipCardWrapper>
      <h3>
        {starship.name}
      </h3>
      <div className="starship-info-wrapper">
        <span className="label">Model </span>
        <span className="content">{starship.model}</span>
      </div>
      <div className="starship-info-wrapper">
        <span className="label">Manufacturer </span>
        <span className="content">{starship.manufacturer}</span>
      </div>
      <div className="starship-info-wrapper">
        <span className="label">Cost in credits </span>
        <span className="content">{starship.cost_in_credits}</span>
      </div>
      <div className="starship-info-wrapper">
        <span className="label">Length </span>
        <span className="content">{starship.length}</span>
      </div>
      <div className="starship-info-wrapper">
        <span className="label">Max atmosphering speed</span>
        <span className="content">{starship.max_atmosphering_speed}</span>
      </div>
      <div className="starship-info-wrapper">
        <span className="label">Crew</span>
        <span className="content">{starship.crew}</span>
      </div>
    </StarshipCardWrapper>
  )
}