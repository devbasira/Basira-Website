"use client";
import React, { useState, useEffect } from "react";
import { CirclePlus } from "lucide-react";
import { motion } from "framer-motion";

const CuratedCollectionComponent = ({ filter }) => (
  <div className="p-4 border rounded">
    <h3 className="text-xl font-bold">Curated Collection Component</h3>
    <p className="text-gray-600">
      Currently selected filter: {filter || "None"}
    </p>
  </div>
);

const FinanceComponent = ({ filter }) => (
  <div className="p-4 border rounded">
    <h3 className="text-xl font-bold">Finance Component</h3>
    <p className="text-gray-600">
      Currently selected filter: {filter || "None"}
    </p>
  </div>
);

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTabExpanded, setIsTabExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleTabClick = (tab) => {
    setIsTabExpanded(true);
    setSelectedTab(tab);
    setSelectedFilter(null); // Reset filter when changing tabs
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile(); // Run on initial mount
    window.addEventListener("resize", checkIsMobile); // Update on resize
    return () => window.removeEventListener("resize", checkIsMobile); // Cleanup
  }, []);

  const categories = [
    {
      name: "Curated Collection",
      subcategories: [
        "Customer Testimonials",
        "Fact Cards",
        "Idea Collection",
        "Pitch Frameworks",
      ],
      component: CuratedCollectionComponent,
    },
    {
      name: "Finance",
      subcategories: ["Lifestyle", "Technology"],
      component: FinanceComponent,
    },
  ];

  return (
    <div className="relative h-screen overflow-y-auto max-w-container w-full flex flex-col items-center justify-center">
      <motion.div
        className="main bg-transparent flex flex-col justify-center font-bold items-start h-full max-w-grid w-full px-4 sm:px-8 lg:px-40"
        animate={{
          gap: isExpanded ? 0 : 20,
          transition: { duration: 0.5 },
        }}
        style={{
          gap: isExpanded ? "10px" : "20px",
        }}
      >
        <motion.h1
          className="text-[40px] lg:text-[100px] bg-transparent"
          animate={{
            scale: isExpanded ? 0.7 : 1,
            transition: { duration: 0.5 },
          }}
          style={{
            transformOrigin: "left top",
            marginTop: isExpanded ? "50px" : "0px",
          }}
        >
          make things easy
        </motion.h1>

        {isExpanded && (
          <motion.div
            className="inner flex flex-col gap-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-yellow-500 text-xl sm:text-2xl">
              curiosity is our compass.
            </h3>
            <p className="font-light text-sm sm:text-base">
              Curiosity is the driving force behind everything we do. We
              constantly ask “why”—challenging assumptions, questioning
              processes, and exploring possibilities. Before we share what we
              stand for, we believe it’s important to understand why our
              principles matter.
              <br />
              Principles, to us, are more than ideals. They are actionable
              frameworks that shape our decisions and behaviors, even in the
              face of complexity or change. They provide a steady foundation
              that keeps us grounded while enabling adaptability.
              <br />
              But principles don’t just guide—they simplify. They transform
              complexity into clarity, chaos into order, and big challenges into
              achievable goals.
              <br />
              At Basira, this commitment to simplicity is rooted in one
              unwavering belief: Make things easy for everyone. This principle
              shapes everything we do—from the strategies we develop to the
              solutions we deliver—ensuring they are clear, practical, and
              impactful.
            </p>
          </motion.div>
        )}
        <motion.div
          onClick={handleClick}
          className="group cursor-pointer mt-3"
          animate={{
            scale: isExpanded ? 0.8 : 1,
            rotate: isExpanded ? 45 : 0,
            transition: { duration: 0.3 },
          }}
        >
          <CirclePlus
            width={50}
            height={50}
            className="text-gray-500 group-hover:text-yellow-500 transition-colors duration-300"
          />
        </motion.div>
      </motion.div>
      {isExpanded && (
        <div className="flex justify-start items-center max-w-container w-full py-3 px-4">
          <div className="w-1/6  flex justify-start">
          <motion.img
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ opacity: 1 }}
            alt="Logo"
            src={"/Basira_Logo_Color.svg"}
            width={200}
            height={100}
            className="z-100"
          />
          </div>
          <motion.div className="flex ml-[60px] flex-col mt-6 items-start w-2/3">
            <div className="tabs flex justify-center items-center gap-6 text-lg font-medium">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`hover:text-gray-800 transition ${
                    selectedTab === category.name
                      ? "font-bold text-black"
                      : "text-gray-600"
                  }`}
                  onClick={() => handleTabClick(category.name)}
                >
                  {category.name.toLowerCase()}{" "}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
