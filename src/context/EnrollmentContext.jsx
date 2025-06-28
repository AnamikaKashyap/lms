import { createContext, useContext, useState, useEffect } from 'react';

const EnrollmentContext = createContext();

export const useEnrollment = () => useContext(EnrollmentContext);

export const EnrollmentProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    return JSON.parse(localStorage.getItem('enrollments')) || {};
  });

  useEffect(() => {
    localStorage.setItem('enrollments', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

const enrollCourse = (courseId) => {
    setEnrolledCourses(prev => ({ ...prev, [courseId]: { progress: 0, completedLessons: [] } }));
  };

  const updateProgress = (courseId, lessonId) => {
    setEnrolledCourses(prev => {
      const updated = { ...prev };
      if (!updated[courseId].completedLessons.includes(lessonId)) {
        updated[courseId].completedLessons.push(lessonId);
        updated[courseId].progress = Math.floor(
          (updated[courseId].completedLessons.length / 5) * 100
        );
      }
      return updated;
    });
  };

  return (
    <EnrollmentContext.Provider value={{ enrolledCourses, enrollCourse, updateProgress }}>
      {children}
    </EnrollmentContext.Provider>
  );
};