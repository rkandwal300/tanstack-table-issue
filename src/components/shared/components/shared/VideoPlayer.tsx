'use client';
import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  src: string;
};

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      video.addEventListener('ended', () => {
        video.play();
      });

      return () => {
        video.removeEventListener('ended', () => {
          video.play();
        });
      };
    }
  }, []);

  return (
    <video
      ref={videoRef}
      controls={false}
      autoPlay
      playsInline
      width={620}
      height={460}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
