import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogListItems } from '../blogposts/blogposts';
import Chip from '../misc/Chip';
import EmptyList from '../blogList/EmptyList';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogListItems.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link className='blog-goBack' to='/blog/interests'>
        <Button>Go Back</Button>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1 style={{color:"white"}}>{blog.title}</h1>
            <div className='blog-subCategory'>
            <Row xs={1} md={4} lg={4} xl={4} xxl={4} className="g-3">
              {blog.subCategory.map((category, i) => (
                <div key={i} style={{fontSize:"20px"}}>
                  <Chip label={category} type='chip_display'/>
                </div>
              ))}
              </Row>
            </div>
          </header>
          {console.log(blog.description)}
          {blog.description.map(x => <p className='blog-desc'>{x}</p>)}
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;