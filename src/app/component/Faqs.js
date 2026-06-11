"use client";
import { useState, useRef, useEffect } from "react";

function FaqItem({ faq, isOpen, onToggle, index }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) setHeight(contentRef.current.scrollHeight);
    else setHeight(0);
  }, [isOpen]);

  return (
    <div
      className="accordion-asked-item effectFade fadeRotateX"
      data-delay={index * 0.1}
    >
      <div className="accordion-asked-title">
        <button
          className={`accordion-button text-body-1 fw-semibold ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => onToggle(faq.id)}
          aria-expanded={isOpen}
        >
          {faq.question}
          <span className="right-icon"></span>
        </button>
      </div>
      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.4s ease",
        }}
      >
        <div className="accordion-body">{faq.answer}</div>
      </div>
    </div>
  );
}

export default function Faqs({ faqs }) {
  // ✅ openId starts with first FAQ's ID
  const [openId, setOpenId] = useState(faqs?.[0]?.id || null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  if (!faqs || !Array.isArray(faqs)) return null;

  return (
    <div className="section-faqs flat-spacing" id="faqs">
      <div className="container">
        <div className="heading-section center mb-64">
          {/* <div className="heading-sub fw-semibold effectFade fadeUp">FAQs</div> */}
          <h2 className="heading-title text-gradient-3 effectFade fadeRotateX">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion-asked">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id} // ✅ first will be open
                  onToggle={toggle}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
