import React, { useState, useEffect } from "react";

interface TranslateOnScrollProps {
  children: React.ReactNode;
}

const TranslateOnScroll = ({ children }: TranslateOnScrollProps) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const style = {
    transform: `translateY(-${scrollY / 3}px)`,
    opacity: `${100 - scrollY / 3}%`,
  };

  return <div style={style}>{children}</div>;
};

export default TranslateOnScroll;
