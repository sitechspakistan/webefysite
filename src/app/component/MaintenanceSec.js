import React from "react";

const comparisons = [
  {
    oldIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
      >
        <path
          d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    oldLabel: "Maintenance",
    newIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
      >
        <path
          d="M3 3v18h18"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16l4-4 4 4 5-5"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 7l2 2-2 2"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    newLabel: "Growth System",
  },
  {
    oldIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
      >
        <path
          d="M8 2h8l1 4H7L8 2z"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 6l-2 14h14L17 6"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 11v4M14 11v4"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="9" r="1" fill="#12103a" />
      </svg>
    ),
    oldLabel: "Fixing bugs",
    newIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
      >
        <path
          d="M12 2L8 6H4l2 8-4 4 4-1 4 5 2-6h4l2-6-4-1 2-4-4 2z"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    newLabel: "Improving performance",
  },
  {
    oldIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
      >
        <circle cx="12" cy="12" r="10" stroke="#12103a" strokeWidth="1.8" />
        <path
          d="M12 6v6l4 2"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    oldLabel: "One-time dev",
    newIcon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
      >
        <path
          d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 3v5h5"
          stroke="#12103a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    newLabel: "Ongoing optimization",
  },
];

const MaintenanceSec = () => {
  return (
    <section id="maintenanceSec" className="pt-5 pb-5">
      <div className="container d-flex align-items-center gap-5">
        <div className="col-lg-3">
          <h2 className="maintenance-heading">
            We Are Not a <br /> Maintenance <br /> Company
          </h2>
          <p className="maintenance-desc">
            We build continuous improvement systems for your website.
          </p>
        </div>
        <div className="col-lg-9 maintenance-right">
          <div className="nmc-table-header">
            <div className="nmc-col-old">Old Thinking</div>
            <div className="nmc-col-new">New Thinking</div>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, i) => (
            <div key={i} className="nmc-row">
              <div className="nmc-col-old nmc-cell">
                <span className="nmc-icon">{row.oldIcon}</span>
                <span className="nmc-cell-label">{row.oldLabel}</span>
              </div>
              <div className="nmc-col-arrow">
                <div className="nmc-arrow-btn">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="#fff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="nmc-col-new nmc-cell">
                <span className="nmc-icon">{row.newIcon}</span>
                <span className="nmc-cell-label">{row.newLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSec;
