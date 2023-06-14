import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../blogposts/backupBlog';
import Chip from '../misc/Chip';
import EmptyList from '../blogList/EmptyList';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
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
              {blog.subCategory.map((category, i) => (
                <div key={i} style={{fontSize:"20px"}}>
                  <Chip label={category} type='chip_display'/>
                </div>
              ))}
            </div>
          </header>
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;