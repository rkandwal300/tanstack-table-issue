import React from 'react';

const Container = () => {
  return (
    <div className="flex flex-col items-center gap-2.5 self-stretch ">
      <div className="aspect-video max-w-[980px] overflow-hidden rounded-xl border">
        {' '}
        {/*
        <div>
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="980"
            height="483"
            viewBox="0 0 980 483"
            fill="none"
          >
            <path
              d="M16 3H964C971.18 3 977 8.8203 977 16V466.344C977 473.523 971.18 479.344 964 479.344H16C8.8203 479.344 3 473.523 3 466.344V16C3 8.8203 8.8203 3 16 3Z"
              stroke="#101828"
              strokeWidth="6"
            />
          </svg>
        </div>
           */}
        <div>
          <video
            controls
            width="980"
            height="483"
            className="aspect-video max-w-[980px] "
          >
            <source
              src="https://youtu.be/Ex0f-HZVIKQ?si=u_a0NfHvJ_IokNy6"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Container;
