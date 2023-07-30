import React from "react";
import Home from "./components/pages/home/Home";
import { Route, Routes } from 'react-router-dom';
import Skills from "./components/pages/profile/Skill";
import { Portfolio } from "./components/pages/profile/Portfolio";
import { BlogLandingPage } from "./components/pages/blog/Blog";
import { ContentPage } from "./components/pages/blog/interests/landing/BlogLandingPage";
import { UniversityBlogPage } from "./components/pages/blog/university/UniversityBlogPage";
import Blog from "./components/pages/blog/interests/landing/Blog";
import { SoftwarePage } from "./components/pages/software/SoftwarePage";
import { Introduction } from "./components/pages/profile/aboutme/Introduction";
import { MeritSection } from "./components/pages/profile/merits/MeritSection";
import { TimelineTree } from "./components/pages/profile/timeline/TimelineTree";

export const router = (
        <>
        <Routes>
        <Route path='/' exact element={<Home />} />
        {/* <Route path='/russelltankaimin' exact element={<Home />} /> */}

        <Route path='/skills' element={<Skills />} />
        {/* <Route path='/russelltankaimin/skills' element={<Skills />} /> */}

        <Route path="/aboutme" element={<Introduction />} />
        {/* <Route path="/russelltankaimin/aboutme" element={<Portfolio />} /> */}

        <Route path="/aboutme/merits" element={<MeritSection />} />
        <Route path="/aboutme/experiences" element={<TimelineTree />} />
        <Route path="/aboutme/coursework" element={<Portfolio />} />
        <Route path="/aboutme/studyplan" element={<Portfolio />} />
        <Route path="/aboutme/learning" element={<Portfolio />} />

        <Route path="/blog/uni" element={<UniversityBlogPage />} />
        {/* <Route path="/russelltankaimin/blog/uni" element={<UniversityBlogPage />} /> */}

        <Route path="/blog/interests" element={<ContentPage />} />
        {/* <Route path="/russelltankaimin/blog/interests" element={<ContentPage />} /> */}

        <Route path="/blog/" element={<BlogLandingPage />} />
        {/* <Route path="/russelltankaimin/blog/" element={<BlogLandingPage />} /> */}

        <Route path="/blog/:id" element={<Blog />} />
        {/* <Route path="russelltankaimin/blog/:id" element={<Blog />} /> */}

        <Route path="/software" element={<SoftwarePage />} />
        {/* <Route path="russelltankaimin/software" element={<SoftwarePage />} /> */}
        </Routes>
        </>
    );