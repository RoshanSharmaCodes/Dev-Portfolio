/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "RoshanCodes_",
  title: "Hey, I'm Roshan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web Applications with JavaScript / ReactJS / NextJS / NodeJS / and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15zsJ8iDf54P8-GqKC0z9VwUbN9_N_yVl/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RoshanSharmaCodes/",
  linkedin: "https://www.linkedin.com/in/roshancodes/",
  gmail: "roshan.rks2812000@gmail.com",
  hashnode: "https://hashnode.com/@roshansharmacodes",
  leetcode: "https://leetcode.com/RoshanCodes_/",
  instagram: "https://www.instagram.com/roshan.codes/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Selling Points?",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your Web applications"
    ),
    emoji("⚡ Web App Optimizations (including UI, UX, Network Calls, Responsiveness) using Modern Techniques"),
    emoji(
      "⚡ Integration of third party services such as Appwrite/ Supabase/ Stripe / MongoDB / Firebase/ AWS / Digital Ocean"
    ),
    emoji("⚡ Developer Robust Backend using NodeJS Implementing - Rate Limiting, Caching, API Keys, Middleware, Query Sanitization etc..."),
    emoji("⚡ Implementing CI/CD Pipeline using AWS and Create Dockerized applications production ready.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Integral University",
      logo: require("./assets/images/Integral.png"),
      subHeader: "Master in Computer Application | CGPA 8.2",
      duration: "Batch 2020 - 2022",
      desc: "Have Developed Web Applications Like :-",
      descBullets: [
        "Invoice Generator for Inventory & Store Management",
        "Hotel Reservation Application"
      ]
    },
    {
      schoolName: "Lucknow University | CGPA 7",
      logo: require("./assets/images/Lucknow.jpg"),
      subHeader: "Bachelors in Computer Application",
      duration: "Batch 2017 - 2020",
      desc: "Have Developed Web Applications Like :-",
      descBullets: ["Local Mart Cart App"]
    },
    {
      schoolName: "Kendriya Vidyalaya IIM | CGPA 8",
      logo: require("./assets/images/KV.png"),
      subHeader: "Majors in Physics, Chemistry & Maths",
      duration: "Batch 2015 - 2017",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://roshanstack.hashnode.dev/top-7-aws-services-for-developers",
      title: "Top 7 AWS Services for Developers",
      description:
        "Amazon Web Services (AWS) stands out with its extensive range of services tailored to empower developers. In this article, we will delve into the top 7 AWS services that software developers should become familiar with"
    },
    {
      url: "https://roshanstack.hashnode.dev/writing-shorter-optimize-code-in-javascript",
      title: "Writing Shorter & Optimize Code in JavaScript",
      description:
        "Writing concise and efficient code is crucial for improving readability, performance, and maintainability. One way to achieve this is by leveraging shorthand expressions, which allow you to write shorter code while maintaining clarity and efficiency."
    },
    {
      url: "https://roshanstack.hashnode.dev/how-to-dockerize-a-reactjs-application-a-step-by-step-guide",
      title: "How to Dockerize a React.js Application: A Step-by-Step Guide",
      description:
        "Docker has become a popular choice for containerizing applications, and it can greatly simplify the deployment and distribution process. If you have a React.js application and want to containerize it using Docker, this step-by-step guide will walk you through the process."
    },
    {
      url: "https://roshanstack.hashnode.dev/mastering-javascript-write-code-like-senior-developers",
      title: "Mastering JavaScript: Write Code Like Senior Developers",
      description:
        "As a senior JavaScript developer, it is essential to not only write code that functions correctly but also to ensure that it is maintainable, efficient, and secure. By following best practices and adhering to established code conventions, you can enhance code readability, reduce errors, and optimize performance."
    },
    {
      url: "https://roshanstack.hashnode.dev/dockerizing-rest-api-using-nodejs",
      title: "Dockerizing REST API using NodeJS",
      description:
        "Docker has revolutionized the way we develop, deploy, and manage applications. It provides a lightweight and portable containerization platform that simplifies the process of packaging and running applications in isolated environments."
    },
    {
      url: "https://roshanstack.hashnode.dev/securing-web-applications-best-practices",
      title: "Securing Web Applications : Best Practices",
      description:
        "Web applications have become an integral part of our lives, offering convenience and accessibility. However, the increasing dependence on web applications has also led to a rise in online attacks targeting their vulnerabilities."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Testimonial",
  subtitle: emoji(
    "I know we all need a good word & feedback 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Always open to opportunities.",
  number: "+91-7007558705",
  email_address: "roshan.rks2812000@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
