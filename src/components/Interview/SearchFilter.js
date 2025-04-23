import React from 'react'
import { SearchInArray, SearchQueryParam, SearchQueryParam2 } from '../SearchFilter/SearchInArray'

const SearchFilter = () => {
  return (
    <div className='flex'>
      <SearchInArray />
      {/* <SearchQueryParam /> */}
      <SearchQueryParam2 />
    </div>
  )
}

export default SearchFilter
