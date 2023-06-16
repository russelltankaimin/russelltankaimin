import React, {useState} from "react";
import SearchBar from "../../../../SearchBar";
import { request } from "graphql-request";
import { useQuery } from "react-query";
import BlogList from "../blogList/BlogList";
import EmptyList from "../blogList/EmptyList";
import { Badge } from "react-bootstrap";
import { PageImage } from "../../../PageImage";
import pic from "../blogposts/images/blogpic.png"
import { BLOG_POST_QUERY } from "../../../../../graphql/blog_queries";

const API_LINK = "https://ap-southeast-2.cdn.hygraph.com/content/clip6zmzt0rd601upbtfxfwz3/master";

export const ContentPage = () => {

  let {data, isLoading, isError} = useQuery("data", async () => {
    const res = await request(API_LINK, BLOG_POST_QUERY);
    return res;
  });

  let blogList = null

  if (!(isLoading || isError)) {
    blogList = data["blogPosts"];
  }

  // console.log("BlogList");

  const [blogs, setBlogs] = useState(data["blogPosts"]);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
    
  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setBlogs(filteredBlogs);
    };
    
      // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <>
    {(isError || isLoading) 
        ? <Badge bg="danger" style={{fontSize : "20px", marginLeft: "30px" }}>GraphQL DB down</Badge> 
        : <Badge bg="success" style={{fontSize : "20px", marginLeft:"30px" }}>GraphQL DB connected</Badge>}
    <PageImage source={pic} />
    <p style={{color:"white", marginLeft: '40px', marginRight:'40px', marginTop:'40px', marginBottom:'40px', fontSize:'25px', fontFamily:"monospace"}}>
      This is my blog where I will talk about my interests (mostly but not limited to Computing and Maths related). Note that this page is still under construction obviously...
    </p>
    <SearchBar
    value={searchKey}
    clearSearch={handleClearSearch}
    formSubmit={handleSearchBar}
    handleSearchKey={(e) => setSearchKey(e.target.value)} />
    
    {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </>
    );
}