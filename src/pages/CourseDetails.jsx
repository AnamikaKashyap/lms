import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCourseDetails } from '../services/api';
import EnrollmentButton from '../components/EnrollmentButton';
import ProgressBar from '../components/ProgressBar';
import { useEnrollment } from '../context/EnrollmentContext';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const { enrolledCourses } = useEnrollment();

  useEffect(() => {
    fetchCourseDetails(id).then(setCourse);
  }, [id]);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading course details...</p>
      </div>
    );
  }

  const progress = enrolledCourses[id]?.progress || 0;
  const completedLessons = enrolledCourses[id]?.completedLessons || [];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#725A7A] rounded-lg shadow-md font-[Arial]">
  
      <div className="mb-6 border-b pb-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-white-900">{course.title}</h1>
        <p className="text-lg text-white-800 mt-2">{course.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <EnrollmentButton courseId={id} />
        <div className="w-full sm:w-2/3">
          <ProgressBar progress={progress} />
        </div>
      </div>

  
      <div>
        <h2 className="text-2xl font-semibold text-white-900 mb-4">Course Lessons</h2>
        <ul className="space-y-3">
          {course.lessons.map((lesson) => {
            const isCompleted = completedLessons.includes(lesson.id);
            return (
              <li
                key={lesson.id}
                className={`flex justify-between items-center px-4 py-3 rounded-md transition ${
                  isCompleted ? 'bg-green-50 border border-green-200' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <Link
                  to={`/course/${id}/lesson/${lesson.id}`}
                  className="text-gray-600 font-medium hover:underline text-base"
                >
                  {lesson.title}
                </Link>
                {isCompleted && (
                  <span className="text-green-600 text-sm font-semibold">✓ Completed</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
