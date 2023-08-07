import React from "react";
import { CheckboxSVGProps } from "./CheckboxSVG.types";

const CheckboxSVG: React.FC<CheckboxSVGProps> = ({
  hexFillColor,
  circle,
  name,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      name={name}
      role="application"
    >
      <title>CheckboxSVG</title>
      {circle ? (
        <circle
          cx="11.5"
          cy="11"
          r="10.5"
          fill={hexFillColor}
          stroke={hexFillColor}
          name="circle"
        ></circle>
      ) : (
        <rect
          x="1"
          y="1"
          width="20"
          height="20"
          fill={hexFillColor}
          stroke={hexFillColor}
          name="rect"
        ></rect>
      )}
      <path
        d="M9.25502 16.2349L4.70502 11.6849C4.43166 11.4116 4.43166 10.9684 4.70502 10.695L5.69494 9.70502C5.9683 9.43164 6.41154 9.43164 6.6849 9.70502L9.75 12.7701L16.3151 6.20502C16.5885 5.93166 17.0317 5.93166 17.3051 6.20502L18.295 7.19497C18.5683 7.46833 18.5683 7.91154 18.295 8.18492L10.245 16.235C9.97159 16.5083 9.52838 16.5083 9.25502 16.2349Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckboxSVG;
