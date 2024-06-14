import React from 'react';

export default function Spinner() {
  return (
    <div
      className="h-8 w-8  animate-spin rounded-full border-4 border-solid border-r-primary"
      role="status"
    ></div>
  );
}
