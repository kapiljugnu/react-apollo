import { gql } from '@apollo/client';

export const getAuthorsQuery = gql`
  query getAuthors {
    authors {
      name
      id
    }
  }
`


export const getBooksQuery = gql`
  query getBooks {
    books {
      name
      id
    }
  }
`