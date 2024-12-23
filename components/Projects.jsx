"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import { Pagination, Mousewheel } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { projects } from "../app/data/projects";

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          // Scroll to bring the section fully into view
          setTimeout(() => {
            section.scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
          }, 300);
        }
      },
      {
        threshold: [0.1], // Trigger when 10% of the section is visible
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden lg:h-screen h-[95vh] w-screen lg:px-0 px-4">
      <Swiper
        direction="vertical" // Enable vertical scrolling
        grabCursor={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.7,
          releaseOnEdges: true,
          thresholdDelta: 50,
          thresholdTime: 500
        }}
        modules={[Pagination, Mousewheel]}
        className="h-full w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="h-full flex items-center justify-center">
              <ProjectCard project={project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
