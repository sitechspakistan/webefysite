import React from "react";
const painPoints = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="pain-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
          stroke="#e0195a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
          stroke="#e0195a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="4"
          y1="4"
          x2="20"
          y2="20"
          stroke="#e0195a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Websites break after updates",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="pain-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 15a3 3 0 100-6 3 3 0 000 6z"
          stroke="#e0195a"
          strokeWidth="2"
        />
        <path
          d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
          stroke="#e0195a"
          strokeWidth="2"
        />
      </svg>
    ),
    label: "No ongoing maintenance or optimization",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="pain-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#e0195a" strokeWidth="2" />
        <path
          d="M12 8v4l3 3"
          stroke="#e0195a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 12h1M17 12h1M12 6v1M12 17v1"
          stroke="#e0195a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Slow performance reduces conversions",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="pain-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#e0195a" strokeWidth="2" />
        <line
          x1="12"
          y1="8"
          x2="12"
          y2="12"
          stroke="#e0195a"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16" r="1" fill="#e0195a" />
      </svg>
    ),
    label: "Small bugs lead to lost revenue",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="pain-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="10"
          width="3"
          height="10"
          rx="1"
          stroke="#e0195a"
          strokeWidth="2"
        />
        <rect
          x="9"
          y="6"
          width="3"
          height="14"
          rx="1"
          stroke="#e0195a"
          strokeWidth="2"
        />
        <rect
          x="15"
          y="13"
          width="3"
          height="7"
          rx="1"
          stroke="#e0195a"
          strokeWidth="2"
        />
        <path
          d="M19 8l-3 3-3-3-3 3"
          stroke="#e0195a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "No continuous improvement system",
  },
];

const PainPointSec = () => {
  return (
    <>
      <section
        id="painPoint"
        className="container d-flex align-items-center gap-5 pt-5 pb-5"
      >
        <div className="col-lg-3">
          <h2 className="pain-heading">
            Why Most Websites <br /> Stop Performing After Launch
          </h2>
          <p className="pain-desc">
            A website is not a one-time project. Without ongoing care, it slows
            down, breaks, and starts costing you business.
          </p>
        </div>
        <div className="col-lg-9 pain-right">
          {painPoints.map((point, index) => (
            <div key={index} className="pain-card">
              <div className="pain-icon-box">{point.icon}</div>
              <p className="pain-label">{point.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PainPointSec;
