import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCourseDetails } from '../services/api';
import { useEnrollment } from '../context/EnrollmentContext';
import IntroToReact from './IntroToReact';
import ComponentsLesson from './ComponentsLesson';
import HooksLesson from './HooksLesson ';
import StateManagementLesson from './StateManagementLesson';
import FinalProjectLesson from './FinalProjectLesson';


const LessonPage = () => {
  const { id, lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const { updateProgress } = useEnrollment();

  useEffect(() => {
    fetchCourseDetails(id).then((course) => {
      const selectedLesson = course.lessons.find((l) => l.id === lessonId);
      setLesson(selectedLesson);
      updateProgress(id, lessonId);
    });
  }, [id, lessonId, updateProgress]);

  if (!lesson) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading lesson...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#725A7A] shadow-md rounded-lg mt-8 font-[Arial]">

      <h2 className="text-3xl font-bold text-white-900 mb-4">{lesson.title}</h2>


    <div className="mb-8">
  {lessonId === "1" && <IntroToReact />}
  {lessonId === "2" && <ComponentsLesson />}
  {lessonId === "3" && <HooksLesson />}
  {lessonId === "4" && <StateManagementLesson />}
  {lessonId === "5" && <FinalProjectLesson />}
</div>


      <Link
  to={`/course/${id}`}
  className="inline-flex items-center group px-6 py-2 border-2 border-white bg-[#355C7D] text-white rounded-xl 
             hover:bg-white hover:text-[#355C7D] hover:border-[#355C7D] transition-colors duration-300 font-semibold"
>
  <span className="transform transition-transform duration-300 group-hover:-translate-x-1 text-lg group-hover:text-[#355C7D]">
    ⟵
  </span>
  <span className="ml-2">Back to Course</span>
</Link>


    </div>
  );
};

export default LessonPage;
