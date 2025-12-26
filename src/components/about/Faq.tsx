"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const Faq = () => {
  const [openId, setOpenId] = useState<string>("faq-1");

  const faqItems: FaqItem[] = [
    {
      id: "faq-1",
      question: "What is AeroFluide?",
      answer:
        "AeroFluide is a leading provider of innovative solutions in fluid dynamics and aeronautical engineering. We specialize in optimizing performance and efficiency across multiple industries.",
    },
    {
      id: "faq-2",
      question: "How can we help your business?",
      answer:
        "We offer comprehensive consulting services, cutting-edge technology solutions, and custom engineering designs tailored to your specific needs and industry requirements.",
    },
    {
      id: "faq-3",
      question: "What industries do you serve?",
      answer:
        "Our expertise spans aerospace, automotive, renewable energy, manufacturing, and marine industries. We adapt our solutions to meet the unique challenges of each sector.",
    },
    {
      id: "faq-4",
      question: "How long is the typical project timeline?",
      answer:
        "Project timelines vary based on complexity and scope. Simple assessments may take weeks, while comprehensive implementations can span several months. We provide detailed timelines during the consultation phase.",
    },
    {
      id: "faq-5",
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we provide comprehensive post-implementation support, maintenance services, and continuous optimization to ensure your systems operate at peak efficiency.",
    },
  ];

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <div className="py-13 sm:py-18 md:py-22 lg:py-30 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mb-10">
          Find answers to common questions about our services and solutions.
        </p>

        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`border  rounded-lg overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-blue/50" : "border-white/30"
                }`}>
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-yellow-500/5 hover:bg-yellow-500/10 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-white text-left">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-white flex-shrink-0 ml-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                  className="overflow-hidden transition-all! duration-300! ease-in-out!">
                  <div
                    className={`px-6 py-4 bg-yellow-500/5 border-t  ${
                      isOpen ? "border-blue/50 " : "border-white/30"
                    }`}>
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
