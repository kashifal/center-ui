import React from "react";

function NoResult({ query }) {
  return (
    <div className='h-full w-full flex items-center justify-center text-center'>
      <p className=''>
        No result found for <span className='font-semibold'>"{query}"</span>
      </p>
    </div>
  );
}

export default NoResult;
