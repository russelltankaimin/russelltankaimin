import React from 'react';
import './BlogList.css';
import { BlogIntroCard } from '../components/BlogIntroCard';

const BlogList = ({ blogs }) => {
  return blogs.map((blog) => (
        <BlogIntroCard blog={blog} />
      )).reverse()
};

export default BlogList;