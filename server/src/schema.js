const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    notes: [Note!]!
    note(id: ID): Note
  }
  type Mutation {
    addNote(
      title: String!
      content: String!
      NoteCardBackGroundColor: Color!
    ): [Note]
  }
  type RequestResponse {
    code: Int!
    message: String!
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

let mockNotes = [
  {
    id: "1",
    title: "Mock Title",
    content: "This is mock content.",
    NoteCardBackGroundColor: "Blue",
    author: {
      id: "123",
      name: "John Doe",
      age: 30,
      photo: "https://example.com/photo.jpg",
    },
  },
  {
    id: "2",
    title: "Mock Title",
    content: "This is mock content.",
    NoteCardBackGroundColor: "Green",
    author: {
      id: "123",
      name: "John Doe",
      age: 30,
      photo: "https://example.com/photo.jpg",
    },
  },
];

const mocks = {
  Query: () => ({
    notes: () => mockNotes, // Return mock notes
    note: (_, { id }) => mockNotes.find((note) => note.id === id), // Find and return specific note by id
  }),

  Mutation: {
    addNote: (_, { title, content, NoteCardBackGroundColor }) => {
      const newNote = {
        id: (mockNotes.length + 1).toString(),
        title,
        content,
        author: {
          id: "123",
          name: "John Doe",
          age: 30,
          photo: "https://example.com/photo.jpg",
        },
        NoteCardBackGroundColor,
      };
      mockNotes.push(newNote); // Add the new note to the mock data
      return mockNotes; // Return updated notes list
    },
  },

  Note: {
    author: (note) => note.author, // Provide author details
  },
};

module.exports = { typeDefs, mocks };
