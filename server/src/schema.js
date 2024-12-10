const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    notes: [Note!]!
    note(id:ID):Note
  }

  type Author {
    id: ID!
    name: String!
    age: Int!
    photo: String
  }

  type Note {
    id: ID!
    title: String!
    content: String!
    author: Author!
    NoteCardBackGroundColor: Color
  }

  enum Color {
    Red
    Green
    Blue
    Yellow
    Purple
    Orange
    Pink
    Black
    White
    Grey
    Brown
    Turquoise
  }

  
`;

const mocks = {
  Query: () => ({
    notes: () => [...new Array(5)], // 5 adet note döndürülecek
  }),
  Note: () => ({
    id: () => Math.ceil((Math.random())*100),
    title: () => "Mock Title",
    content: () => "This is a mock content.",
    author: () => ({
      id: "123",
      name: "John Doe",
      age: 30,
      photo: "https://example.com/photo.jpg",
    }),
    NoteCardBackGroundColor: () => "Blue", // Enum'dan bir renk
  }),
  Author: () => ({
    id: () => "123",
    name: () => "John Doe",
    age: () => 30,
    photo: () => "https://example.com/photo.jpg",
  }),
};

module.exports = { typeDefs, mocks };
