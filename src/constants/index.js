import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  figma,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  photoshop,
  plusSquare,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
} from "../assets";

import abilogo from "../assets/company-logos/abi-logo.png";
import abicertlogo from "../assets/company-logos/abicert-logo.png";
import hashbitlogo from "../assets/company-logos/hashbit-logo.png";

import mancosa from "../assets/education/mancosa.png";
import harvard from "../assets/education/harvard.png";
import google from "../assets/education/google.png";
import hedera from "../assets/education/hedera.png";
import michigan from "../assets/education/michigan.png";

import html from "../assets/icons/html.png";
import nextjs from "../assets/icons/nextjs.png";
import react from "../assets/icons/react.png";
import sql from "../assets/icons/sql.png";
import tailwind from "../assets/icons/tailwind.png";

export const navigation = [
  {
    id: "0",
    title: "About Me",
    url: "#aboutme",
  },
  {
    id: "1",
    title: "Education",
    url: "#education",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "Projects",
    url: "#projects",
  },
  /*{
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  }, */
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [abilogo, abicertlogo, hashbitlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Here are some awesome tools I have learnt to use over the years. Please note that this list is not exauhstive. It is meant to illustrate areas where i have the most experience.";

export const collabContent = [
  {
    id: "0",
    title: "HTML5",
  },
  {
    id: "1",
    title: "Component libraries (Tailwind CSS)",
  },
  {
    id: "2",
    title: "JavaScript (React)",
  },
  {
    id: "3",
    title: "NextJS",
  },
  {
    id: "4",
    title: "UI/UX (Figma)",
  },
  {
    id: "5",
    title: "SQL",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "HTML5",
    icon: html,
    width: 28,
    height: 38,
  },
  {
    id: "1",
    title: "Tailwind",
    icon: tailwind,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "React",
    icon: react,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Nextjs",
    icon: nextjs,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Figma",
    icon: figma,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "SQL",
    icon: sql,
    width: 40,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const education = [
  {
    id: "0",
    title: "Higher Certificate - Information Technology",
    text: "The qualification aims to develop an integrated conceptual understanding, synthesis and application of information technology principles.",
    backgroundUrl: "assets/education/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: mancosa,
    status: "Completed in 2023",
    link: "https://www.mancosa.co.za/programme/higher-certificate-in-information-technology/",
  },
  {
    id: "1",
    title: "Bachelor of Commerce - Information Technology",
    text: "An accredited IT Management Degree will enable you to offer and manage business solutions through information supported technology.",
    backgroundUrl: "assets/education/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: mancosa,
    light: true,
    status: "In progress till 2026",
    link: "https://www.mancosa.co.za/programme/bachelor-of-commerce-in-information-and-technology-management/",
  },
  {
    id: "2",
    title: "CS50 - Introduction to Computer Science",
    text: "Harvard University's introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike.",
    backgroundUrl: "assets/education/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: harvard,
    status: "Completed in 2023",
    link: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
  },
  {
    id: "3",
    title: "Crash Course on Python - Google IT Automation with Python",
    text: "This course by Google is designed to provide IT professionals with in-demand skills -- including Python, Git, and IT automation",
    backgroundUrl: "assets/education/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: google,
    light: true,
    status: "Completed in 2022",
    link: "https://www.coursera.org/learn/python-crash-course",
  },
  {
    id: "4",
    title: "Building on Hedera - a course by The Hashgraph Association",
    text: "an online course created by The Hashgraph Association and Swirlds Labs to create a path for those looking to build on distributed ledger technology/blockchain.",
    backgroundUrl: "assets/education/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: hedera,
    status: "In progress till 2024",
    link: "https://hashgraphdev.com/",
  },
  {
    id: "5",
    title: "Financial Technology (Fintech) Innovations",
    text: "This specialization by the University of Michigan ensures the learner is able to explain concepts in payment technologies, cryptocurrency and blockchain, credit scores and technologies, and smart investing techniques.",
    backgroundUrl: "assets/education/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: michigan,
    status: "Completed in 2021",
    link: "https://online.umich.edu/series/financial-technology-innovations/",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
