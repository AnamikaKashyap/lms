export const fetchCourseDetails = async (id) => {
  return {
    id,
    title: "React for Beginners",
    description: "Learn React from scratch!",
    lessons: [
      { id: "1", title: "Intro to React" },
      { id: "2", title: "Components" },
      { id: "3", title: "Hooks" },
      { id: "4", title: "State Management" },
      { id: "5", title: "Final Project" },
    ],
  };
};