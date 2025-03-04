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
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 shadow-sm"
          >
            <button
              className="w-full text-left flex justify-between items-center text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
