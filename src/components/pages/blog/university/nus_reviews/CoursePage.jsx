import React from "react";
import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useLocation } from "react-router-dom";

export const CoursePageAndReview = () => {
    const location = useLocation();
    console.log(location)
    const {content} = location.state
    console.log(content);
    return <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}></ReactMarkdown>
}