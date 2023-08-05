import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { all_notes } from './notepages/allnotes';
import '../blog/interests/landing/BlogLandingPage.css';
import { Row } from 'react-bootstrap';
import Chip from '../blog/interests/components/Chip';
import { GeneratedBlogContent } from '../blog/interests/renderer/render';
import EmptyList from '../blog/interests/blogList/EmptyList';
import { BackButton } from '../../backbutton/BackButton';

const Note = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    let note = all_notes.find((note) => note.id === parseInt(id));
    if (note) {
      setNote(note);
    }
  }, [id]);

  return (
    <>
      {note ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {note.createdAt}</p>
            <h1 style={{color:"black"}}>{note.title}</h1>
            <div className='blog-subCategory'>
            <Row xs={1} md={4} lg={4} xl={4} xxl={4} className="g-3">
              {note.subCategory.map((category, i) => (
                  <Chip label={"#"+category} type='chip_display'/>
              ))}
              </Row>
            </div>
          </header>
          <GeneratedBlogContent jsonObject={note.page} />
        </div>
      ) : (
        <EmptyList />
      )}
    <BackButton redirect_link={"/notes/"} description={"Back to Notes Page"}/>
    </>
  );
};

export default Note;