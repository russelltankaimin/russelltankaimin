import React from "react";
import Home from "./components/pages/home/Home";
import { Route, Routes } from 'react-router-dom';
import Skills from "./components/pages/profile/Skill";
import { BlogLandingPage } from "./components/pages/blog/Blog";
import { ContentPage } from "./components/pages/blog/interests/landing/BlogLandingPage";
import { UniversityBlogPage } from "./components/pages/blog/university/UniversityBlogPage";
import Blog from "./components/pages/blog/interests/landing/Blog";
import { SoftwarePage } from "./components/pages/software/SoftwarePage";
import { Introduction } from "./components/pages/profile/aboutme/Introduction";
import { MeritSection } from "./components/pages/profile/merits/MeritSection";
import { TimelineTree } from "./components/pages/profile/timeline/TimelineTree";
import { CourseWork } from "./components/pages/blog/university/coursework/CourseWork";
import { PlannerPage } from "./components/pages/blog/university/planner/PlannerPage";
import { LearningPage } from "./components/pages/blog/university/self_learn/LearningPage";
import { NotesLandingPage } from "./components/pages/notes/NotesLandingPage";
import Note from "./components/pages/notes/Note";
import { Wanderings } from "./components/pages/blog/wanderings/Wanderings";
import { CoursePageAndReview } from "./components/pages/blog/university/nus_reviews/CoursePage";
import { CityReviewPage } from "./components/pages/blog/wanderings/cities/CityReviewPage";

export const router = (
        <>
        <Routes>
        <Route path='/' exact element={<Home />} />
        {/* <Route path='/russelltankaimin' exact element={<Home />} /> */}

        <Route path='/aboutme/skills' element={<Skills />} />
        {/* <Route path='/russelltankaimin/skills' element={<Skills />} /> */}

        <Route path="/aboutme" element={<Introduction />} />
        {/* <Route path="/russelltankaimin/aboutme" element={<Portfolio />} /> */}

        <Route path="/aboutme/merits" element={<MeritSection />} />
        <Route path="/aboutme/experiences" element={<TimelineTree />} />
        <Route path="/aboutme/coursework" element={<CourseWork />} />
        <Route path="/aboutme/studyplan" element={<PlannerPage />} />
        <Route path="/aboutme/learning" element={<LearningPage />} />

        <Route path="/blog/uni" element={<UniversityBlogPage />} />
        {/* <Route path="/russelltankaimin/blog/uni" element={<UniversityBlogPage />} /> */}
        <Route path="/blog/uni/:slug" element={<CoursePageAndReview />} />
        <Route path="/blog/interests" element={<ContentPage />} />
        {/* <Route path="/russelltankaimin/blog/interests" element={<ContentPage />} /> */}

        <Route path="/blog/" element={<BlogLandingPage />} />
        {/* <Route path="/russelltankaimin/blog/" element={<BlogLandingPage />} /> */}

        <Route path="/blog/:id" element={<Blog />} />
        {/* <Route path="russelltankaimin/blog/:id" element={<Blog />} /> */}

        <Route path="/software" element={<SoftwarePage />} />
        {/* <Route path="russelltankaimin/software" element={<SoftwarePage />} /> */}
        <Route path="/notes" element={<NotesLandingPage/>} />
        <Route path="/notes/:id" element={<Note />} />

        <Route path="/blog/travels" element={<Wanderings />} />
        <Route path="/blog/travels/:city/" element={<CityReviewPage />} />
        </Routes>
        </>
    );