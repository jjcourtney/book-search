import { gql } from "@apollo/client";

export const getSingleUserQuery = gql`
  query getSingleUser {
    getSingleUser {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
   }
  }
`;

export const createUserMutation = gql`
  mutation createUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        username
        password
      }
    }
  }
`;

export const saveBookMutation = gql`
  mutation saveBook($bookToSave: BookToSave!) {
    saveBook(book: $bookToSave) {
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const removeBookMutation = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          bookId
          authors
          description
          image
          link
          title
        }
      }
    }
  }
`;
