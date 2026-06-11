import React from "react";

const forList = [
  "Agencies managing multiple clients",
  "Startups scaling fast",
  "SaaS companies",
  "Ecommerce brands",
  "Businesses with active traffic",
];

const notForList = [
  "One-time cheap fixes",
  "Lowest-price seekers",
  "Short-term only projects",
  "No growth mindset businesses",
];

const WhoIsItSec = () => {
  return (
    <section id="whoIsIt" className=" pt-5 pb-5 bg-white">
      <div className="container wif-container">
        <div className="wif-card wif-card-green">
          <div className="wif-card-content">
            <div className="wif-text">
              <h3 className="wif-heading wif-heading-green">Who This Is For</h3>
              <ul className="wif-list">
                {forList.map((item, i) => (
                  <li key={i} className="wif-list-item">
                    <span className="wif-check-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                      >
                        <circle cx="12" cy="12" r="11" fill="#22c55e" />
                        <path
                          d="M7 12.5l3.5 3.5 6.5-7"
                          stroke="#fff"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="wif-illustration wif-illustration-green">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
              >
                {/* Target rings */}
                <circle
                  cx="60"
                  cy="60"
                  r="55"
                  stroke="#22c55e"
                  strokeWidth="5"
                  opacity="0.2"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  stroke="#22c55e"
                  strokeWidth="5"
                  opacity="0.4"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="25"
                  stroke="#22c55e"
                  strokeWidth="5"
                  opacity="0.7"
                />
                <circle cx="60" cy="60" r="10" fill="#22c55e" />
                {/* Arrow */}
                <line
                  x1="90"
                  y1="30"
                  x2="62"
                  y2="58"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <polygon points="88,22 98,32 86,36" fill="#22c55e" />
              </svg>
            </div>
          </div>
        </div>
        {/* Right Card - Who This Is NOT For */}
        <div className="wif-card wif-card-red">
          <div className="wif-card-content">
            <div className="wif-text">
              <h3 className="wif-heading wif-heading-red">
                Who This Is NOT For
              </h3>
              <ul className="wif-list">
                {notForList.map((item, i) => (
                  <li key={i} className="wif-list-item">
                    <span className="wif-x-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                      >
                        <circle cx="12" cy="12" r="11" fill="#ef4444" />
                        <path
                          d="M8 8l8 8M16 8l-8 8"
                          stroke="#fff"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="wif-illustration wif-illustration-red">
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#ef4444"
                  strokeWidth="6"
                  opacity="0.25"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="36"
                  stroke="#ef4444"
                  strokeWidth="5"
                  opacity="0.5"
                />
                <path
                  d="M38 38l44 44M82 38L38 82"
                  stroke="#ef4444"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default WhoIsItSec;
