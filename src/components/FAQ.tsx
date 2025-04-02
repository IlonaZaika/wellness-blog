"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is this app about?",
    answer:
      "This app is a Next.js project styled with Tailwind CSS and built using TypeScript.",
  },
  {
    question: "How do I install dependencies?",
    answer: "Run `npm install` or `yarn install` in your terminal.",
  },
  {
    question: "Is this app mobile-friendly?",
    answer: "Yes! Tailwind CSS ensures responsive design out of the box.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto lg:max-w-3xl space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-b-accent p-4">
          <button
            className="w-full h5-custom flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 p-custom text-textGrey">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
