import React from 'react'
import { Link } from 'react-router-dom'
import Starships from './Starships'
import styled from 'styled-components'

const CharacterInfoWrapper = styled.div`
  margin: auto;
  width: 960px;

  @media (max-width: 520px) {
    width: 90%;
  }

  h2 {
    color: #fff;
    font-family: 'Oswald', sans-serif;
    font-size: 52px;
    padding: 32px 0;
  }

  .back {
    color: #fff;
    border: 1px solid #fff;
    font-family: 'Roboto', sans-serif;
    padding: 5px 10px;
    transition: all .3s ease;

    &:hover {
      box-shadow: 0px 0px 12px 1px #0f0e0e;
    }
  }

  section {
    padding-bottom: 20px;
    
    .info-wrapper {
      font-size: 18px;
      line-height: 23px;

      .label {
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
      }

      .content {
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        padding-left: 2px;
      }
    }
  }
`

export default function CharacterInfo( { location } ) {
  const { character } = location.state

  return(
    <CharacterInfoWrapper>
      <Link className="back" to="/"> &#8592; Back</Link>
      <h2>
        { character.name }
      </h2>
      <section>
        <div className="info-wrapper">
          <span className="label">Gender </span>
          <span className="content">{character.gender}</span>
        </div>
        <div className="info-wrapper">
          <span className="label">Height </span>
          <span className="content">{character.height}</span>
        </div>
        <div className="info-wrapper">
          <span className="label">Hair color </span>
          <span className="content">{character.hair_color}</span>
        </div>
        <div className="info-wrapper">
          <span className="label">Skin color </span>
          <span className="content">{character.skin_color}</span>
        </div>
        <div className="info-wrapper">
          <span className="label">Birth year </span>
          <span className="content">{character.birth_year}</span>
        </div>
      </section>
      <Starships starships={ character.starships } />
    </CharacterInfoWrapper>
  )
}