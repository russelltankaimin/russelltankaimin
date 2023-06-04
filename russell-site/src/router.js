import React from "react";
import Home from "./components/pages/Home";
import { Route, Routes } from 'react-router-dom';
import Skills from "./components/pages/profile/Skill";

export const router = (
        <>
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        </Routes>
        </>
    );