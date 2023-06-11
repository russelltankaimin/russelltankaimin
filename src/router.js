import React from "react";
import Home from "./components/pages/home/Home";
import { Route, Routes } from 'react-router-dom';
import Skills from "./components/pages/profile/Skill";
import { Portfolio } from "./components/pages/profile/Portfolio";
import { CourseReviewPage } from "./components/pages/blog/university/nus_reviews/CourseReview";
import { BlogLandingPage } from "./components/pages/blog/Blog";
import { TempPage } from "./components/pages/blog/interests/tempPage";

export const router = (
        <>
        <Routes>
        {/* <Route path='/' exact element={<Home />} /> */}
        <Route path='/russelltankaimin' exact element={<Home />} />

        <Route path='/skills' element={<Skills />} />
        <Route path='/russelltankaimin/skills' element={<Skills />} />

        <Route path="/aboutme" element={<Portfolio />} />
        <Route path="/russelltankaimin/aboutme" element={<Portfolio />} />

        <Route path="/blog/uni" element={<CourseReviewPage />} />
        <Route path="/russelltankaimin/blog/uni" element={<CourseReviewPage />} />

        <Route path="/blog/interests" element={<TempPage />} />
        <Route path="/russelltankaimin/blog/interests" element={<TempPage />} />

        <Route path="/blog/" element={<BlogLandingPage />} />
        <Route path="/russelltankaimin/blog/" element={<BlogLandingPage />} />
        </Routes>
        </>
    );