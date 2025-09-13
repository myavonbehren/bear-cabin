import type { NextPage } from "next";
import { useState, useEffect } from "react";
import AboutDesktop from "../../components/About-desktop";
import AboutMobile from "../../components/About-mobile";

const About: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile ? <AboutMobile /> : <AboutDesktop />;
};

export default About;
