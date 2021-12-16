const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input BookToSave {
    _id: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
}

  type Book {
    _id: ID!
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
    saveBook(_id: String!, book: BookToSave): Book
    deleteBook(_id: String!) : Book
    login(email: String!, password: String!) : User
  }
`;

module.exports = typeDefs;
