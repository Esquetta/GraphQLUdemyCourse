const resolvers = {
  Query: {
    notes: (_, __, { dataSources }) => {
      return dataSources.noteAPI.getNotes();
    },
    note:(parent,{noteId},{ dataSources },info)=>{
        return dataSources.noteAPI.getNote(noteId)
    }
  },
  Note: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.noteAPI.getAuthorById(authorId);
    },
  },

};

module.exports = resolvers;
