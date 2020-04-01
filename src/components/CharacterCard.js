import React, { useEffect } from 'react'
import styled from 'styled-components'

const CharacterCardWrapper = styled.div`
  background-color: #111214;
  margin: 10px;
  padding: 10px 0;
  transition: all .3s ease;
  width: 300px;

  &:hover {
    background-color: #1C1A09;
    box-shadow: 0px 0px 15px 1px #E6D649;
  }

  header {
    border-bottom: 1px solid #E6D649;
    margin: 0 20px 10px 20px;

    h2 {
      color: #fff;
      font-family: 'Oswald', sans-serif;
      font-size: 18px;
      line-height: 32px;
    }
  }

  section {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 20px;
    padding: 0 20px;

    .generalInfo {
      .label {
        color: #fff;
      }

      .content {
        color: #E6D649;
        padding-left: 5px;
      }
    }
  }
`

export default function CharacterCard( { character } ) {
  return(
    <CharacterCardWrapper>
      <header>
        <h2>{character.name}</h2>
      </header>
      <section>
        <div className="generalInfo">
          <span className="label">Gender </span>
          <span className="content">{character.gender}</span>
        </div>
        <div className="generalInfo">
          <span className="label">Height </span>
          <span className="content">{character.height}</span>
        </div>
        <div className="generalInfo">
          <span className="label">Mass </span>
          <span className="content">{character.mass}</span>
        </div>
      </section>
    </CharacterCardWrapper>
  )
}