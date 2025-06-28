import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CourseDetails from './pages/CourseDetails';
import LessonPage from './pages/Lesson';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/course/1" />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course/:id/lesson/:lessonId" element={<LessonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;