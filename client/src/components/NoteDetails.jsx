import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loading from "./Loading";

export const getNote = gql`
  query Note($noteId: ID) {
    note(id: $noteId) {
      id
      title
      content
      NoteCardBackGroundColor
    }
  }
`;

const NoteDetails = () => {
  const { noteId } = useParams();
  const { loading, error, data } = useQuery(getNote, {
    variables: { noteId: noteId },
  });
  if (loading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  return (
    <div style={{backgroundColor: data.note.NoteCardBackGroundColor}}>
        <h3>{data.note.title}</h3>
      <p>
        {data.note.content}
      </p>
    </div>
  );
};

export default NoteDetails;
