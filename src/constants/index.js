import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `As a dedicated software developer with a diverse educational background in aviation, management, and computer science, I bring a unique perspective to my work. My experience is enriched by internships that have honed my skills and ignited my passion for creating innovative and impactful products. In my spare time, I stay informed about global events, with a particular focus on Africa, where my roots lie. Driven by a deep connection to my heritage, I aspire to develop software solutions that address and resolve critical issues faced by the African continent.`;

export const ABOUT_TEXT = `
  <p style="margin-bottom: 1rem;">I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. My professional journey spans various fields including software development, consulting, and teaching.</p>
  <p style="margin-bottom: 1rem;">With a diverse educational background in computer science, aviation, and management, I have gained a comprehensive understanding of different industries. I have experience working with a wide range of technologies, from web development to mobile application development. My database expertise includes both SQL (MySQL, PostgreSQL, SQLite) and NoSQL (MongoDB, Firebase) systems.</p>
  <p style="margin-bottom: 1rem;">Having grown up in Uganda since the age of one, I am deeply connected to Africa and aspire to return to contribute to its economic growth through innovative software solutions. Initially, I pursued a career in aviation, but my intrigue for software development and artificial intelligence led me to further my education in computer science, focusing on these areas.</p>
  <p style="margin-bottom: 1rem;">I thrive in collaborative environments and enjoy working with clients across various fields to explore new areas of development. My passion for technology extends to philanthropy, where I actively contribute to software projects aimed at making a positive impact.</p>
`;


export const EXPERIENCES = [
  {
    year: "July 2023 – April 2024",
    role: "C & Linux Content Developer",
    company: "University of Alberta, Edmonton, Canada",
    description: `Published 20 instructional videos and lab materials, contributing to course design for 600 students per semester.`,
    technologies: ["C", "Linux", "GDB"]
  },
  {
    year: "Sept 2023 – Jan 2024",
    role: "Mobile Full Stack Developer",
    company: "Single Parent Life, Calgary, Canada",
    description: `Designed a Flutter app connecting single parents, integrated GCP services, and achieved a 97% performance score.`,
    technologies: ["Flutter", "Google Cloud Platform", "Cloud Firestore", "Cloud Functions", "Cloud Storage"]
  },
  {
    year: "May 2022 – Sept 2022",
    role: "STEM Instructor and University Consultant",
    company: "Justine Academy, Seoul, South Korea",
    description: `Taught AP courses, developed materials, and guided 30 students in university applications.`,
    technologies: ["AP Computer Science", "AP Statistics", "AP Calculus", "AP Physics"]
  },
  {
    year: "May 2019 – Sept 2019",
    role: "Network Technician (Internship)",
    company: "LG U+, Suwon, South Korea",
    description: `Installed LAN networks and assisted in troubleshooting for medium to large-sized companies.`,
    technologies: ["LAN Networks", "Network Troubleshooting"]
  },
  {
    year: "May 2017 – March 2019",
    role: "Student Instructor",
    company: "Green River College, Auburn, Washington",
    description: `Developed instructional materials for Calculus, designed supplementary resources, and facilitated lectures.`,
    technologies: ["Pre-Calculus", "Calculus", "Instructional Design"]
  }
];




export const PROJECTS = [
  {
    title: "CamTract",
    image: project1,
    description: `Developed a prototype attestation phone and web application for developing countries, collaborating with the Ugandan government. Utilized GCP and Flutter for the mobile app, and led a team of 6 developers as a product manager.`,
    technologies: ["GCP", "Flutter", "Web Development", "Mobile Development", "Product Management"]
  },
  {
    title: "Carvana Kaggle Contest",
    image: project2, // replace with the actual image path
    description: `Implemented a visual recognition project for image segmentation using PyTorch, employing CNN, DeepLabV3, and UNET algorithms with accuracies exceeding 98%.`,
    technologies: ["PyTorch", "CNN", "DeepLabV3", "UNET", "Image Segmentation"],
    link: "https://github.com/jjlovesplanes/carvana_img_segmentation"
  },
  {
    title: "Social Distribution",
    image: project3, // replace with the actual image path
    description: `Designed and developed a social media application similar to Instagram with features like posting, commenting, liking, and following. Implemented backend functionalities using Django and created an admin panel for node-to-node connections.`,
    technologies: ["Django", "Backend Development", "User Authentication", "Social Media"],
    link: "https://github.com/jjlovesplanes/socialdistribution"
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  }
];


export const CONTACT = {
  address: "Edmonton, Alberta, Canada ",
  phoneNo: "+1-825-461-8209",
  email: "kim.jaekuang@gmail.com",
};
