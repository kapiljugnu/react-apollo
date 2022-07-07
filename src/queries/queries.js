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

export const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`