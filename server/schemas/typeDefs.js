const { gql } = require('apollo-server-express');

const typeDefs = gql`
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
    username: String!
    password: String!
    savedBooks: [Book]
  }

  type Query {
    getSingleUser: User
  }

  type Mutation {
    createUser(email: String!, password: String!, 
    username: String!): User
    saveBook(_id: String!, techNum: Int!): Book
    deleteBook(_id: String!) : Book
    login(email: String!, password: String!) : User
  }
`;

module.exports = typeDefs;
