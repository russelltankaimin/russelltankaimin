import React from 'react';
import '../../blog/interests/blogList/BlogList.css';
import { NoteCard } from './NotePage';

const NoteList = ({ notes }) => {
  return notes.map((note) => (
        <NoteCard note={note} />
      )).reverse()
};

export default NoteList;