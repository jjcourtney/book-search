const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input BookToSave {
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
}

  type Book {
    bookId: String!
    authors: [String]!
    description: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    email: String!
    username: String!
    password: String!
    savedBooks: [Book]
  }

  type Query {
    getSingleUser: User
  }

  type LoggedInUser {
    token: String!
    user: User!
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): LoggedInUser
    saveBook(book: BookToSave): Book
    removeBook(bookId: String!) : Book
    login(email: String!, password: String!) : LoggedInUser
  }
`;

module.exports = typeDefs;
