const mocks = require('./schema'); // Mock veri dosyasını import ediyoruz
const resolvers = {
  Query: {
    notes: (_, __, { dataSources }) => {
      return dataSources.noteAPI.getNotes(); // API'den tüm notları al
    },
    note: (parent, { noteId }, { dataSources }, info) => {
      return dataSources.noteAPI.getNote(noteId); // Belirli bir notu ID ile al
    },
  },
  Mutation: {
    addNote: (_, { title, content, NoteCardBackGroundColor }) => {
      if (!title || !content || !NoteCardBackGroundColor) {
        throw new Error("Missing required fields");
      }
  
      const newNote = {
        id: (mockNotes.length + 1).toString(),
        title:title,
        content:content,
        author: {
          id: "123",
          name: "John Doe",
          age: 30,
          photo: "https://example.com/photo.jpg",
        },
        NoteCardBackGroundColor,
      };
  
      mockNotes.push(newNote);
      return mockNotes;
    },
  },
  
  Note: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.noteAPI.getAuthorById(authorId); // Notun yazarı bilgisi
    },
  },
};

module.exports = resolvers;
