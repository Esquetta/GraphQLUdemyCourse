import {
    gql
} from 'apollo-server'


const typeDef = gql ` 
  
  type Query {
    notes:[Note!]!

   }

 type Author{
  id:ID!
  name:String!
  age:Int!
  photo:String
 }

 type Note{  
 id:ID!
 title:String!
 content:String!
 author:Author!,
 NoteCardBackGroundColor:Color
 }

 enum Color{
    Red,
    Green,
    Blue,
    Yellow,
    Purple,
    Orange,
    Pink,
    Black,
    White,
    Grey,
    Brown,
    Turquoise
 }
`

module.exports = typeDef;