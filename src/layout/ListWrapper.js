import React, { Fragment } from 'react'
import { PaginationContext } from '../context/paginationContext'
import Characters from '../components/Characters'
import Pagination from '../components/Pagination'

export default function ListWrapper() {

  return (
    <PaginationContext.Consumer>
      { (context) => (
        <Fragment>
          <Characters page={ context.current.get } />
          <Pagination />
        </Fragment>
      ) }
    </PaginationContext.Consumer>
  )
}
