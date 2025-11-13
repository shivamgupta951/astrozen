import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Shivam Gupta — Full Stack MERN Developer",
  author: "Shivam Gupta",
  description:
    "Full Stack MERN Developer | Galgotias University | GSSoC Contributor 2025 | Building scalable and interactive web applications with React, Node.js, and MongoDB.",
  lang: "en",
  siteLogo: "/shivam-profile.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/shivam-gupta-199203339/" },
    { text: "Github", href: "https://github.com/shivamgupta951" },
    { text: "Email", href: "mailto:kapilmohangupta20@gmail.com" },
  ],
  socialImage: "/shivam-og.png",
  canonicalURL: "https://shivamgupta-portfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Shivam Gupta",
    specialty: "Full Stack MERN Developer",
    summary:
      "I'm a B.Tech CSE student at Galgotias University (2023–2027) passionate about building fast, modern web apps using React, Node.js, Express, and MongoDB. I enjoy solving DSA problems and exploring TypeScript and Next.js.",
    email: "kapilmohangupta20@gmail.com",
  },
  experience: [
    {
      company: "GirlScript Summer of Code (GSSoC) 2025",
      position: "Open Source Contributor",
      startDate: "Jan 2025",
      endDate: "Present",
      summary: [
        "Contributing to open-source projects using React, Node.js, and TypeScript.",
        "Collaborating with developers worldwide to fix issues, enhance features, and write clean, modular code.",
        "Learning collaborative development workflows via Git and GitHub.",
      ],
    },
    {
      company: "Galgotias University",
      position: "B.Tech Computer Science Student",
      startDate: "Aug 2023",
      endDate: "Present",
      summary: [
        "Learning Data Structures & Algorithms (DSA) in Java.",
        "Exploring full-stack development, REST APIs, and modern frontend frameworks.",
        "Developed multiple personal projects demonstrating real-world full-stack concepts.",
      ],
    },
  ],
  projects: [
    {
      name: "YemmyChats",
      summary:
        "A full-featured MERN stack chat app supporting real-time messaging, group chats, StoreRoom for shared files, email notifications, and voice messages with Cloudinary integration.",
      linkPreview: "https://github.com/shivamgupta951/YemmyChats",
      linkSource: "https://github.com/shivamgupta951/YemmyChats",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=YemmyChats",
    },
    {
      name: "iDataBook",
      summary:
        "A cloud-based academic document manager that allows users to securely store, organize, and access files. Built with React, Express, and MongoDB for seamless CRUD operations.",
      linkPreview: "https://github.com/shivamgupta951/idatabook",
      linkSource: "https://github.com/shivamgupta951/idatabook",
      image: "https://placehold.co/600x400/6366f1/ffffff?text=iDataBook",
    },
    {
      name: "Weather Forecast",
      summary:
        "A responsive weather web app showing real-time forecasts using OpenWeatherMap API, built with React and Tailwind CSS.",
      linkPreview: "https://github.com/shivamgupta951/weatherforecast",
      linkSource: "https://github.com/shivamgupta951/weatherforecast",
      image: "https://placehold.co/600x400/14b8a6/ffffff?text=Weather+Forecast",
    },
  ],
  about: {
    description: `
Hi, I'm **Shivam Gupta**, a passionate Full Stack MERN Developer and open-source enthusiast from India.  
Currently pursuing my B.Tech in Computer Science at **Galgotias University (2023–2027)**, I focus on building modern, scalable web applications that deliver great user experiences.  

I enjoy exploring the MERN stack, contributing to open source, and experimenting with new technologies like **TypeScript**, **Next.js**, and **Zustand**.  
When not coding, I like improving my DSA skills and working on creative personal projects like **YemmyChats** and **YemmyHMGame**.
    `,
    image: "/shivam-about.png", 
  },
};
