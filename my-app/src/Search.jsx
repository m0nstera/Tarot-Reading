import React from 'react';
import Form from 'react-bootstrap/Form';

const Search = ({search, handleSearch}) => {
  return (
    <div>
      <Form.Group controlId="form.ControlTextarea">
        <Form.Control
          as="textarea"
          placeholder="search for insight and answers"
          rows="1"
          value={search}
          onChange={handleSearch}
        />
      </Form.Group>
    </div>
  );
};

export default Search;