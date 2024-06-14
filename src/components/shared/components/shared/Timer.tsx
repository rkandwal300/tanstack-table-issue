/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  seconds: number;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  completed: boolean;
}

const Countdown: React.FC<CountdownProps> = ({
  seconds,
  setCompleted,
  completed,
}) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Start or reset the countdown
  useEffect(() => {
    if (completed) {
      // Reset countdown
      clearInterval(intervalId!);
      setTimeLeft(seconds);
    } else {
      // Start countdown
      const id = setInterval(() => {
        setTimeLeft(prevTimeLeft => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
      }, 1000);
      setIntervalId(id);

      // Cleanup interval on unmount
      return () => clearInterval(id);
    }
  }, [completed, seconds]);

  // Handle completion
  useEffect(() => {
    if (timeLeft === 0 && !completed) {
      setCompleted(true);
    }
  }, [timeLeft, completed, setCompleted]);

  // Restart the countdown
  const handleReset = () => {
    setCompleted(false);
  };

  // Format time for display
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <p>({formatTime(timeLeft)})</p>
    </div>
  );
};

export default Countdown;
