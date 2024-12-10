const { RESTDataSource } = require("apollo-datasource-rest");

class NoteAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL='https://udemy-graphql-notesapp-rest-ap.herokuapp.com/'
  }

  getNotes(){
    return this.get('notes')
  }
  getAuthors(){
    return this.get('authors');
  }
  getAuthorById(authorId){
    return this.get(`authors/${authorId}`); 
  }
  getNoteById(noteId){
    return this.get(`notes/${noteId}`)
  }
}

module.exports=NoteAPI;
