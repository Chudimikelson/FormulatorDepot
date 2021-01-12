import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <div className='input-group'>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search ingredients...'
          className='mr-sm-2 ml-sm-5'
        ></Form.Control>
        <div className='input-group-append'>
          <button type='submit' className='input-group-text'>
            <i className='fas fa-search' />
          </button>
        </div>
      </div>
    </Form>
  )
}

export default SearchBox
