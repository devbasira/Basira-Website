"use client";
import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  // const [isTabExpanded, setIsTabExpanded] = useState(false);
  // const [selectedTab, setSelectedTab] = useState(null);
  // const [selectedFilter, setSelectedFilter] = useState(null);
  const handleTabClick = () => {
    // setIsTabExpanded(true);
    // setSelectedTab(tab);
    // setSelectedFilter(null);
  };

  const categories = [
    {
      name: "about",
      subcategories: [
        "Customer Testimonials",
        "Fact Cards",
        "Idea Collection",
        "Pitch Frameworks",
      ],
    },
    {
      name: "Insights",
      subcategories: ["Lifestyle", "Technology"],
    },
  ];

  return (
    <div className="flex w-screen h-screen overflow-y-auto justify-center">
      <div className="h-screen overflow-y-auto max-w-container w-full flex flex-col items-center">
        <motion.nav
          className=" flex justify-start items-center w-full py-3 px-4"
          initial={{ y: "300%" }}
          animate={{ y: 0 }}                                                
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <div className="flex justify-start">
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
          <motion.div className="flex ml-[60px] flex-col mt-6 h-full items-start">
            <div className="tabs flex justify-center max-w-[880px] items-center gap-6 text-lg font-medium">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`text-black`}
                  onClick={() => handleTabClick(category.name)}
                >
                  {category.name.toLowerCase()}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.nav>
      </div>
    </div>
  );
};

export default Menu;
