import React from 'react';
import { useEnrollment } from '../context/EnrollmentContext';

const EnrollmentButton = ({ courseId }) => {
  const { enrolledCourses, enrollCourse } = useEnrollment();
  const isEnrolled = enrolledCourses[courseId];

  const handleEnroll = () => {
    enrollCourse(courseId);
    alert('🎉 Enrolled Successfully!');
  };

  return (
    <button
  className="bg-[#355C7D] text-white px-4 py-2 rounded-xl border-2 border-white font-bold cursor-pointer 
             hover:bg-white hover:text-[#355C7D] hover:border-[#355C7D] transition-colors duration-300"
  onClick={handleEnroll}
>
  {isEnrolled ? "Continue Learning" : "Enroll Now"}
</button>

  );
};

export default EnrollmentButton;