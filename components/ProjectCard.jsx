import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white"
    >
      <div className="relative h-full w-full">
        <motion.img
          key={currentImage}
          src={project.images[currentImage]}
          alt={project.title}
          className="object-cover h-full w-full"
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          exit={{ x: -100 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute bottom-10 right-10 flex space-x-4">
          <button
            onClick={handlePrevImage}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Left
          </button>
          <button
            onClick={handleNextImage}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Right
          </button>
        </div>
      </div>
      <div className="absolute top-10 left-10 bg-transparent">
        <h1 className="text-3xl text-black font-bold bg-transparent">
          {project.title}
        </h1>
        <p className="mt-2  text-black text-lg bg-transparent">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
