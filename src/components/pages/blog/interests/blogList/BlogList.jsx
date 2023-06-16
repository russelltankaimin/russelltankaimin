import React from 'react';
import BlogItem from '../blogposts/BlogItem';
import './BlogList.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      )).reverse()}
    </div>
  );
};

export default BlogList;