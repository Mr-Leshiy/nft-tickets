import React from "react";

const ImageIcon = ({ height, width }) => {
  return (
    <svg
      height={height ? height : "24"}
      width={width ? width : "24"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" />
      <g fill="#231f20">
        <path d="m18 3h-12a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-12a3 3 0 0 0 -3-3zm-12 2h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0 -3.52 0l-7.28 6.07v-11.7a1 1 0 0 1 1-1z" />
        <circle cx="8" cy="8.5" r="1.5" />
      </g>
    </svg>
  );
};

export default ImageIcon;
