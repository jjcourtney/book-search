import { gql } from "@apollo/client";

export const meQuery = gql`
  query me {
    me {
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
  mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
      token
      user{
        _id
        email
        username

      }
    }
  }
`;

export const saveBookMutation = gql`
  mutation saveBook($bookToSave: BookToSave!) {
    saveBook(book: $bookToSave) {
      _id
      email
      username
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

export const removeBookMutation = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      email
      username
      savedBooks{
        bookId
        authors
        description
        image
        title
        link
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
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;
