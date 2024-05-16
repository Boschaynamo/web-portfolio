import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Full Stack Developer with a background in Electronic Engineering, which has helped me develop skills such as teamwork and analysing complex systems. My focus is on developing comprehensive solutions that includes Front-End and Back-End software, as well as hardware. I have knowledge of agile methodologies, GIT, data structures, algorithms, and CSS frameworks. I have experience in Front-End and Back-End development with Tailwind CSS, React, Node.js, Express, PostgreSQL, Sequelize, and Redux.`;

export const ABOUT_TEXT = `As a recent graduate in electronics engineering, I have honed my problem-solving abilities through various electronics projects, demonstrating my capacity to analyze complex systems and devise innovative solutions. These experiences have equipped me with a strong foundation in various programming languages as well as proficiency in software development methodologies.
I am always on the lookout to learn and grow my knowledge and skills in software development.`;

export const EXPERIENCES = [
  {
    year: "Aug 2022 - Present",
    role: "Electronics Technician",
    company: "National Institute of Microbiology Dr. Carlos Malbrán",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS", "Javascript", "C++"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Javascript", "C++"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website - Innovatech",
    url:"https://innovatechok.vercel.app/",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React","Redux", "Node.js", "Express","PostgreSQL","Sequelize"],
  },
  {
    title: "DC Programmable electronic load",
    url:"https://drive.google.com/file/d/1QvRNrC_lQLjZ7vJVON4Kn-dWL3zSZihC/view",
    image: project2,
    description:
      "Construction of a laboratory instrument that emulates a direct current electrical resistor. Electronic loads are essential for functional testing of batteries, power supplies, solar panels, and other power equipment. In this project was implemented a web page for remote control and monitoring of the electronic load which expanded the system's capabilities and provided a flexible user interface accessible from any device with an Internet connection. This web page was fully embedded within the microcontroller used.",
    technologies: ["HTML", "CSS", "Javascript", "C++", "LVGL", "Hardware Design"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Quilmes, Buenos Aires, Argentina ",
  phoneNo: "+54 11 5124 8956 ",
  email: "nico_947quil@hotmail.com",
};
