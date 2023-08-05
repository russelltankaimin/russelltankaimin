import React, {useState} from "react";
import SearchBar from "../../../../SearchBar";
import BlogList from "../blogList/BlogList";
import EmptyList from "../blogList/EmptyList";
import { blogListItems } from "../blogposts/blogposts";
import { PageImage } from "../../../PageImage";
import pic from "../../../images/interestsicon.png"
import { BackButton } from "../../../../backbutton/BackButton";

export const ContentPage = () => {

  const [blogs, setBlogs] = useState(blogListItems);
  const [searchKey, setSearchKey] = useState('');

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
    
  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogListItems;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setBlogs(filteredBlogs);
    };
    
      // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogListItems);
    setSearchKey('');
  };

  return (
    <>
    <PageImage source={pic} />
    <h1 className="blogger_header"><u>My Blog</u></h1>
    <p className="header_intro">
      This is my blog where I will talk about my interests (mostly but not limited to Computing and Maths related). In this page, my blogs will be tagged with certain topics like
      Mathematics, Computer Science, NUS, Miscellaneous, Astrophysics, Geography, Thoughts, Life, Hikes, Research or any other topic in general. This is essentially my interests blog, so
      almost anything I want to write about can be here!
    </p>
    <SearchBar
    value={searchKey}
    clearSearch={handleClearSearch}
    formSubmit={handleSearchBar}
    handleSearchKey={(e) => setSearchKey(e.target.value)} />
    <h2 className="blogger_header"><u>Posts</u></h2>
    <div style={{margin: "2% 15% 2% 15%" }}>
    {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
    <div style={{margin: "2% 15% 2% 15%" }}>
    <BackButton description={"Back to Blog Page"} redirect_link={'/blog'} />
    </div>
    </>
    );
}