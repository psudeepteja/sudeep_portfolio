"use client"
import { useEffect, useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <div className="pr-2 md:pr-0 cursor-pointer">
      <img
        src={theme === 'light' ? '/dark.png' : '/light.png'}
        alt="theme"
        height={"20px"}
        width="20px"
        onClick={toggleTheme}
      />
    </div>
  );
}
