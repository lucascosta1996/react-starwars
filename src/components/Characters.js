import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PaginationContext } from '../context/paginationContext'
import CharacterCard from '../components/CharacterCard'
import lightsaber from '../assets/lightsaber.svg'

const CharactersWrapper = styled.div`
  position: relative;

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 auto;
    width: 960px;

    @media ( max-width: 520px ) {
      align-items: center;
      flex-direction: column;
      width: 90%;
    }
  }

  .loading {
    animation: rotation 2s infinite linear;
    bottom: 0;
    filter: drop-shadow(0px 0px 15px rgba(255, 136, 136, 0.8));
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    max-width: 90px;
  }

  @keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
  }

  .header {
    border-bottom: 1px solid #fff;
    margin: 0 auto;
    margin-bottom: 30px;
    max-width: 960px;
    text-align: left;

    h1 {
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-size: 30px;
      padding-bottom: 10px;
    }

    @media (max-width: 520px) {
      max-width: 90%;
    }
  }
`

function Characters( { page } ) {
  const context = useContext( PaginationContext )

  useEffect( () => {
    async function changePagination() {
      context.characters.set( page )
    }
    changePagination()
  }, [ page ] )

  if ( context.loading.get ) return (
    <CharactersWrapper>
      <img src={ lightsaber } className="loading" />
    </CharactersWrapper>
  )

  return (
    <PaginationContext.Consumer>
      { (context) => {
        const characters = context.characters.get

        return (
          <CharactersWrapper>
            <div className="header">
              <h1>Characters</h1>
            </div>
            <section className="list">
              { characters && characters.results.map( character => (
                <Link to={ {
                  pathname: `/info/${character.name}`,
                  state: {
                    character
                  }
                } } key={character.name}>
                  <CharacterCard character={ character } />
                </Link> 
              ) ) }
            </section>
          </CharactersWrapper>
        )
      } }
    </PaginationContext.Consumer>
  )
}

export default Characters
