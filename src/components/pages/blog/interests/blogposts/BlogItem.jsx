import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../misc/Chip';
import './BlogItem.css';
import { Button } from 'react-bootstrap';

const BlogItem = ({
  blog: {
    content,
    blogTitle,
    created_in,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap' style={{border: "5px solid  #969696", boxSizing:"border-box"}}>
      <Chip label={category} type='chip_tag'/>
      <h3 style={{marginLeft:"20px", marginRight:"20px"}}>{blogTitle}</h3>
      <p className='blogItem-desc'>{content.text}</p>
      <footer>
        <div>
          <p style={{marginLeft:"10px"}}>{created_in}</p>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          <Button style={{marginRight:"20px", marginLeft:"20px", marginBottom:"20px"}}>Read</Button>
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;