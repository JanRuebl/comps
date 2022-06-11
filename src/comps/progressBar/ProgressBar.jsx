import { useState } from "react";

const ProgressBar = ({ maxValue }) => {
  const [progress, setProgress] = useState(0);

  const widthToPercent = Math.floor((progress * 100) / maxValue);

  setTimeout(() => {
    if (progress < maxValue) {
      setProgress(progress + 1);
    } else {
      setProgress(0);
    }
  }, 1000);

  return (
    <div className='progress__container'>
      <p>
        progress: {progress} | maxValue: {maxValue}
      </p>
      <div className='progressbar'>
        <div
          className='progressbar__progress'
          style={{ width: widthToPercent + "%" }}
        ></div>
      </div>
      <p>{widthToPercent}%</p>
    </div>
  );
};

export default ProgressBar;
