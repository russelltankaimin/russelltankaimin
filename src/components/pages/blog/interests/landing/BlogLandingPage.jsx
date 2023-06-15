import React, {useState} from "react";
import SearchBar from "../../../../SearchBar";
import { blogList } from "../blogposts/backupBlog";
import { request } from "graphql-request";
import { useQuery } from "react-query";
import BlogList from "../blogList/BlogList";
import EmptyList from "../blogList/EmptyList";
import { PageImage } from "../../../PageImage";
import pic from "../blogposts/images/blogpic.png"
import { BLOG_POST_QUERY } from "../../../../../graphql/blog_queries";
import { API_LINK } from "../../../../../graphql/query_utils";


export const ContentPage = () => {

  let {data, isLoading, isError} = useQuery("data", async () => {
    const res = await request(API_LINK, BLOG_POST_QUERY);
    return res;
  });


    const [blogs, setBlogs] = useState(blogList);
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
        <PageImage source={pic} />
        <p style={{color:"white", marginLeft: '40px', marginRight:'40px', marginTop:'40px', marginBottom:'40px', fontSize:'25px', fontFamily:"monospace"}}>
            This is my blog where I will talk about my interests (mostly but not limited to Computing and Maths related). Note that this page is still under construction obviously...
        </p>
        <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </>
    );
}