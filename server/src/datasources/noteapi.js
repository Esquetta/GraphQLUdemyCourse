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
  async addNote(title,content,color){
    
    this.post(`notes/add`,{
      title:title,
      content:content,
      NoteCardBackGroundColor:color
    })
    return this.getNotes();
  }
}

module.exports=NoteAPI;
