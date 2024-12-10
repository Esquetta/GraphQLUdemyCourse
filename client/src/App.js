import React from "react";
import Layout from "./components/Layout";
import NoteList from "./components/NoteList";
import NoteDetails from "./components/NoteDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          {/* Define Route for NoteList */}
          <Route exact path="/" element={<NoteList />} />
          
          {/* Define Route for NoteDetails */}
          <Route path="/notes/:noteId" element={<NoteDetails />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
