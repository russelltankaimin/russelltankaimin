import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogListItems } from '../blogposts/blogposts';
import Chip from '../components/Chip';
import EmptyList from '../blogList/EmptyList';
import './BlogLandingPage.css';
import { Row } from 'react-bootstrap';
import { GeneratedBlogContent } from '../renderer/render';
import { BackButton } from '../../../../backbutton/BackButton';

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
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1 style={{color:"black"}}>{blog.title}</h1>
            <div className='blog-subCategory'>
            <Row xs={1} md={4} lg={4} xl={4} xxl={4} className="g-3">
              {blog.subCategory.map((category, i) => (
                  <Chip label={"#"+category} type='chip_display'/>
              ))}
              </Row>
            </div>
          </header>
          <GeneratedBlogContent jsonObject={blog.page} />
        </div>
      ) : (
        <EmptyList />
      )}
    <BackButton redirect_link={"/blog/interests/"} description={"Back to Blog Home Page"}/>
    </>
  );
};

export default Blog;