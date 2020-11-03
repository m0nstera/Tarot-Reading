import React from 'react';
import Form from 'react-bootstrap/Form';

const Search = ({search, handleSearch}) => {
  return (
    <div>
      <Form.Group controlId="search-area">
        <Form.Control
          as="textarea"
          size="lg"
          placeholder="search for perspective"
          rows="1"
          value={search}
          onChange={handleSearch}
        />
      </Form.Group>
    </div>
  );
};

export default Search;