import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  UTDesign,
  redCross,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  convergent,
  paycom,
  kpmg
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Database Developer",
    icon: backend,
  },
  {
    title: "Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Incoming Audit Data Architecture and Engineering Intern",
    company_name: "KPMG",
    icon: kpmg,
    //iconBg: "#383E56",
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      // "Worked in a cross-functional team of 5 software engineers, 2 product managers, and 2 UI/UX designers in the development of a mobile application aimed at promoting exploration of Austin’s unique attractions",
      // "Assisted in the integration of Augmented Reality (AR) technology within the application, enhancing user engagement by providing an immersive experience when visiting different locations",
      // "Guided the strategic implementation of a tech stack, utilizing React Native for the frontend, Firebase for the backend database, and Clerk Auth tokens for secure user authentication",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Texas Convergent",
    icon: convergent,
    //iconBg: "#383E56",
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Worked in a cross-functional team of 5 software engineers, 2 product managers, and 2 UI/UX designers in the development of a mobile application aimed at promoting exploration of Austin’s unique attractions",
      "Assisted in the integration of Augmented Reality (AR) technology within the application, enhancing user engagement by providing an immersive experience when visiting different locations",
      "Guided the strategic implementation of a tech stack, utilizing React Native for the frontend, Firebase for the backend database, and Clerk Auth tokens for secure user authentication",
    ],
  },
  {
    title: "Technology Summer Engagement Fellow",
    company_name: "Paycom",
    icon: paycom,
    //iconBg: "#383E56",
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "Designed and developed an interactive to-do list application using PHP, HTML, CSS, and MySQL, providing users with a streamlined and efficient task management system",
      "Participated in a comprehensive training program focused on Paycom’s application security, gaining in-depth knowledge of industry best practices of preventing emerging threats and security protocols",
      "Acquired hands-on experience in C#, React.js, PHP, and SwiftUI mobile development through practical projects",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "UTDesign",
    icon: UTDesign,
    //iconBg: "#383E56",
    iconBg: "#E6DEDD",
    date: "January 2023 - May 2023",
    points: [
      "Collaborated with a team of 5 members on the Tool Crib initiative to create an inventory and team database consisting of 300+ tools and 50+ teams.",
      "Utilized React.js, MySQL, and Node.js to create a web application which checked-in and checked-out tools and notified admins of late returns as well as emailed students who have not returned their items.",
      "Developed a dynamic web application utilizing the MERN stack resulting in a highly responsive and user-friendly application.",
    ],
  },
  {
    title: "Youth Placement Coordinator, Volunteer",
    company_name: "The American Red Cross",
    icon: redCross,
    iconBg: "#E6DEDD",
    date: "October 2020 - May 2022",
    points: [
      "Organized and conducted interviews for a pool of prospective youth volunteers, adeptly assessing candidates' suitability.",
      "Worked with over 30 Red Cross Clubs to merge 500+ student volunteers into the Red Cross database.",
      "Coordinated a team of 8 Youth Placement Specialists and increased prospective volunteer intake by 40%.",
    ],
  },

];


const projects = [
  {
    name: "UTDesign Tool Crib",
    description:
      "Web-based dashbaord that allows UTDesign Admins to checkout out and in tools for studio teams as well as add, create, edit, or delete team and tool data form the database.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ishaan0601/utd-tool-crib",
  },
  {
    name: "MoneyMonkey IOS App",
    description:
      "A mobile ios application that allowed the user to input their various investments (stocks, real estate, etc) and provided financial tips based on their portfolio diversification.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "HackUTD IX",
        color: "green-text-gradient",
      },
      {
        name: "XCode",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ishaan0601/Money_Monkey---IOS-App",
  },
  {
    name: "NBA Roster Tool",
    description:
      "A web-application that reads json data of NBA team and individual player data to compare relevant statistics and create potential rosters through the interactive interface.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "JSON",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
