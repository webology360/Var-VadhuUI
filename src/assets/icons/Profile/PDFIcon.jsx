import React from "react";

const PDFIcon = () => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="27" height="27" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_37_298" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_37_298"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default PDFIcon;
