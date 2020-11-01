import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Search = ({searchName, handleSearchChangeName}) => {
  return (
    <Container>
      <Form.Group controlId="form.ControlTextarea">
        <Form.Control
          as="textarea"
          placeholder="search for insight and answers"
          rows="1"
          value={searchName}
          onChange={handleSearchChangeName}
        />
      </Form.Group>
    </Container>
  );
};

export default Search;