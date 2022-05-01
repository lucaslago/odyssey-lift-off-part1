const { gql } = require("apollo-server");

const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    thumbnail: String
    length: Int
    modulesCount: Int
    author: Author
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;
