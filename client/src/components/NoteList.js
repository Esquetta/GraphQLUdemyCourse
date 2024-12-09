import React from "react";
import NoteCard from "./NoteCard";
import { gql, useQuery } from "@apollo/client";
import Loading from "./Loading";

const notes = gql`
  query ExampleQuery {
    notes {
      id
      title
      content
      NoteCardBackGroundColor
      author {
        id
        name
        age
        photo
      }
    }
  }
`;

const NoteList = () => {
  const { loading, error, data } = useQuery(notes);

  if (loading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data?.notes?.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;

