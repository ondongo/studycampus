import { useState, useEffect } from "react";

const useScrollSpy = (sectionIds: string[], offset: number = 150) => {
  const [activeSection, setActiveSection] = useState<string | null>(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map((id) => ({
        id,
        offsetTop: document.getElementById(id)?.offsetTop,
      }));

      const scrollPosition = window.scrollY + offset;

      // Find the active section based on scroll position
      const currentSection = sections
        .reverse()
        .find(
          (section) =>
            section.offsetTop !== undefined &&
            section.offsetTop <= scrollPosition
        );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export default useScrollSpy;
