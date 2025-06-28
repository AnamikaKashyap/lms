import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="mb-6 w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-white-700">Progress</span>
        <span className="text-sm font-semibold text-whote-700">{progress}%</span>
      </div>

      <div
        className="w-full bg-gray-200 rounded-full h-4 shadow-inner"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="bg-[#355C7D] h-4 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
