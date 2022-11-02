/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Prajwal's Portfolio",
  description:
    "Creating an impact with end to end products.",
  og: {
    title: "Prajwal Patankar Portfolio",
    type: "website",
    url: "http://prajwalpatankar.me/",
  },
};

//Home Page
const greeting = {
  title: "Prajwal Patankar",
  logo_name: "Prajwal Patankar",
  nickname: "pro_jwal",
  subTitle:
    "Creating an impact by solving real world problems with end to end products.",
  resumeLink: "https://drive.google.com/file/d/1aSZqPRjBJUmzthFY75qQJXDeqRNk175h/view?usp=sharing",
  // portfolio_repository: "https://github.com/prajwalpatankar/masterPortfolio",
  githubProfile: "https://github.com/prajwalpatankar/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/prajwalpatankar",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/prajwalpatankar/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prajwalpatankar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:patankarprajwal@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/prajwal._.p/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚛️ Building stable and responsive website front end using React-Redux and AngularJS",
        "⚛️ Designing extensible and easy to use APIs using Django-Rest Framework",
        "⚛️ Creating scalable and fast application backends in Django, Flask, Node and Express",
        "⚛️ Developing mobile applications using Android, Flutter and React Native",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "simple-icons:angularjs",
          style: {
            color: "#d6002f",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f05133",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚛️ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚛️ Experience of working with Computer Vision and NLP projects",
        "⚛️ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚛️ Experience working on multiple cloud platforms",
        "⚛️ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚛️ Deploying deep learning models on cloud to use on mobile devices",
        "⚛️ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#ffa117",
      },
      profileLink: "https://leetcode.com/patankarprajwal/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/patankarprajwal",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/prajwal600",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/prajwalpatankar",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "Master of Science in Computer Science",
      logo_path: "USC_logo.png",
      alt_name: "USC",
      duration: "2022-Present",
      descriptions: [
        "⚛️ Currently enrolled for CSCI 570: Analysis of Algorithms, CSCI 571: Web Technologies.",
        "⚛️ Graduating in May 2024",
        "⚛️ Available to work from April 2023",
      ],
      website_link: "http://pict.edu",
    },
    {
      title: "Pune Institute of Computer Technology",
      subtitle: "Bachelor of Engineering in Information Technology",
      logo_path: "pict_logo.png",
      alt_name: "PICT Pune",
      duration: "2018-2022",
      descriptions: [
        "⚛️ CGPA : 9.78 / 10",
        "⚛️ Third Year Engineering topper with a GPA of 10/10.",
        "⚛️ Course Work : Discrete Mathematics, Engineering Mathematics, Data Structures & Algorithms, Advanced Data Structures, Problem Solving and Object Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Theory of Computation, Software Engineering & Project Management, Cloud Computing, Data Science and Big Data Analytics, Computer Organisation and Architecture, Processor Architecture and Interface",
        "⚛️ Honors Course : Data Science and Visuals, Statistics and Machine Learning ",
      ],
      website_link: "http://pict.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/897G6UVU2CAZ",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/VT63URVHX4WU",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/535PTCU6ESLT",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/WG8BQSY7TF3V",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/YB4SY2D828B6",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "Front-End Web Development with React",
      subtitle: "- Jogesh Mupalla",
      logo_path: "thkuosat.png",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/EXCCLSQH7MZF",
      alt_name: "React",
      color_code: "#fff",
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      subtitle: "- Susan Roger",
      logo_path: "duke.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/SQ3KSY42GCTE",
      alt_name: "deeplearning.ai",
      color_code: "#fff",
    },
    {
      title: "Java Programming: Principles of Software Design",
      subtitle: "- Robert Duvall",
      logo_path: "duke.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/U224JTFHTLBH",
      alt_name: "Java",
      color_code: "#fff",
    },
    {
      title: "Java Programming: Solving Problems with Software",
      subtitle: "- Owen Astrachan",
      logo_path: "duke.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/5AUKAZ59FUGZ",
      alt_name: "Java",
      color_code: "#fff",
    },
    {
      title: "Java Programming: Arrays, Lists, and Structured Data",
      subtitle: "- Andrew Hilton",
      logo_path: "duke.jpg",
      certificate_link: "https://www.coursera.org/account/accomplishments/verify/4A2MJPYD7WD5",
      alt_name: "deeplearning.ai",
      color_code: "#fff",
    },
    /*{
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Software Developer for emerging start-ups as well as established MNCs. Through these experiences, I learnt about working with diverse teams, and tight deadlines (especially at start-ups). I also enjoy volunteering for social work and organising events.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Development Intern",
          company: "eQ Technologic, Inc.",
          company_url: "https://www.1eq.com/",
          logo_path: "1eq.jpg",
          duration: "June 2020 - July 2020",
          location: "Pune, Mahrashtra, India",
          description: "Worked on developing eQube-DAAS : a low/no-code integration platform. Developed a stand-alone security system using Java and Spring Framework to integrate authentication systems of all the BI and MI applications provided by eQ. Collaborated on Devops pipelines involving security systems.",
          color: "#ee3c26",
        },
        {
          title: "Software Development Intern",
          company: "Rhythmflows Solutions Pvt. Ltd.",
          company_url:
            "https://rhythmflows.com",
          logo_path: "rhythm.png",
          duration: "Oct 2019 - Feb 2020",
          location: "Pune, Mharashtra, India",
          description: "Collaborated on a bank reconciliation system for various multinational banks. Designed database schemas and workflows for transactions. Implemented backend in Python connecting AngularJS forms through REST APIs.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Core Team Member",
          company: "Pictoreal",
          company_url: "https://pictoreal.in/",
          logo_path: "pictoreal_logo.png",
          duration: "June 2019 - June 2022",
          location: "Pune, Maharashtra, India",
          description: "Pictoreal is a group of high-spirited and effervescent individuals and is one of the most sought-after non-technical clubs at Pune Institute of Computer Technology (PICT), which organises events for social causes like Blood Donation Camps, Donation Drives, Educating the poor, Career Advisory session for school kids, etc. It publishes vibrant magazines every year, all of them portraying the remarkable contributions of its members. I was a part of the core team for Pictoreal and was responsible for proofreading and editing articles for the magzine. Being fond of photography, I decided to volunteer for all the photography and videography along with the editing done for the school.",
          color: "#4285F4",
        },
        {
          title: "Photography Team Head and Core Team Member",
          company: "PICT IEEE Students Branch",
          company_url: "https://pictieee.in/",
          logo_path: "IEEE.png",
          duration: "Aug 2019 - July 2021",
          location: "Pune, Maharashtra, India",
          description: "PICT IEEE Students Branch is an organisation awarded as Best Student Chapter among all IEEE chapters across Pune, with an aim of inculcating a sense of technical awareness amongst its student members. PISB aims to escalate the knowledge of developments and trends in the diverse field of technology by holding two major events every year- Credenz and Credenz Tech Dayz alongside several seminars, workshops, hackathons. I was a core team member managin the organisation as a whole as well as managing sub-events under Credenz. I was also the head of the event 'Network Tresure Hunt' which was an online treasure hunt played by over 2000 players every year.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Hobbies",
      experiences: [
        {
          title: "Photography",
          company: "",
          logo_path: "camera.png",
          description: "I'm always carrying a camera around. Even as a hobby, photography has the power to lift people's spirits and help them look at things from a different perspective.",
          color: "#4285F4",
        },
        {
          title: "Riding Bikes",
          company: "",
          logo_path: "motorcycle.png",
          description: "Always been a motorhead. On weekends, I love going on long motorcycle rides.We all ride for different reasons, and sometimes for all the reasons: fun, adventure, to bond with friends, to save fuel, to relax, as a moving meditation, to make the commute more interesting, to get through traffic easier, to accomplish goals. The reasons are infinite.",
          color: "#4285F4",
        },
        {
          title: "eSports",
          company: "",
          logo_path: "csgo.png",
          description: "I enjoy playing competitive games like CS:GO and Valorant. I have participated in multiple Counter Strike tournaments. Proud to be a Global Elite (top 2%) in competitive CS:GO.",
          color: "#4285F4",
        },
        {
          title: "Swimming",
          company: "",
          logo_path: "swimming.jpg",
          description: "I enjoy swimming as a sport. I spend atleast 6 hours a week swimming. It can provide you with a low-impact workout and it's a good way to relax and feel good.",
          color: "#4285F4",
        },
      ]
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Through my projects, I aim on solving real world problems. My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pp.png",
    description:
      "Open to work as a Software Development Engineer Intern for the summer of 2023. You can get in touch with me on my email :)",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Email Address",
    subtitle:
      "patankarprajwal@gmail.com",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (213) 649-6735",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
