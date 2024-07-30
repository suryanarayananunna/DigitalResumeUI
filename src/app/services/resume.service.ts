import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private apiUrl = 'https://api.example.com/resume'; // This is just a placeholder

  constructor() { }

  getResumeData(): Observable<any> {
    const mockData = {
      name: "Nunna Surya Narayana",
      title: "Senior Software Engineer",
      experience: "With over 4 + 1 (Intern) years of proven experience in building enterprise-level applications right from the design phase while adhering to coding standards, strict timelines, and client satisfaction.",
      coreCompetencies: [
        "Full Stack Developer",
        "Scrum and Jira Planning",
        "Adaptive to New Technologies",
        "Team and Time Management",
        "Flexibility in Adapting to New Environments"
      ],
      toolsAndTechnologies: [
        "Java Full Stack (Java Spring Boot, Angular, MySQL)",
        "Mean Stack Developer (Node.js, Express.js, Angular, MongoDB)",
        "Dot Net Core",
        "Java Spring Boot",
        "GIT",
        "Sprint and Jira Planning",
        "Visual Studio Code, Visual Studio, IntelliJ, Eclipse, Microsoft SQL Server, MongoDB Compass, Linux, Docker, Oracle WebLogic Server, Windows Server, WinSCP, PuTTY",
        "AWS, Azure DevOps",
        "Microservice Architecture",
        "IoT, Machine Learning (Beginner)"
      ],
      education: "Computer Science and Engineering from Godavari Institute of Engineering and Technology (Autonomous)",
      projects: [
        {
          name: "CoFY Application",
          duration: "Sep-2022 to Till Date",
          role: "Full Stack Developer",
          technologies: "JAVA, Angular, MySQL, Microservices, Scrum",
          description: "CoFY Compliance For You is an internal application at CITI that aims to provide a solution for managing compliance and regulatory requirements in an efficient and user-friendly manner.",
          responsibilities: [
            "API Design, Development, and Maintenance",
            "Security Vulnerability Management",
            "Automated Testing",
            "Collaboration and Documentation"
          ]
        },
        {
          name: "Platform for UI Modernization and Analysis - PUMA",
          duration: "Jan-2021 to Sep-2022",
          role: "MEAN Stack Developer (Node.js, Express.js, Angular, MongoDB)",
          technologies: "Node.js, Angular, MongoDB, JavaScript, Docker, Linux, GIT, Browser Extensions, OAuth, Node.js Microservices, Scrum",
          description: "PUMA Platform for UI Modernization and Analysis is a patent-pending technology of Virtusa that helps customers modernize their UI from one web technology to another. PUMA helps in analyzing the existing UI and provides various insights like complexity scores and story points. PUMA also helps in generating code templates in an automated process.",
          responsibilities: [
            "Agile Methodologies and Team Management",
            "Architectural Design and Development",
            "API and Microservices Development",
            "Front-End and Full-Stack Development",
            "Collaboration and Deployment"
          ]
        },
        {
          name: "E-Library",
          duration: "Sept-2020 to Jan-2021",
          role: "Full Stack Developer",
          technologies: "Java Spring Boot, Angular, SQL, Oracle WebLogic Server, SOAP and RESTful Java APIs",
          description: "E-Library is an internal Electronic Library Management system at Virtusa. This portal helps in maintaining and managing the vast online resources provided by Virtusa for their employees and clients.",
          responsibilities: [
            "Daily Scrum Meetings",
            "Assigning Tasks to Team Members for Each Sprint",
            "Analysis of Codebase",
            "Angular UI Development with Java Spring Boot Backend"
          ]
        },
        {
          name: "Trends",
          duration: "May-2019 to Nov-2019",
          role: "Full Stack Developer",
          technologies: "Dot Net Core, Angular, SQL, Microsoft SQL Server, Visual Studio, GIT, Scrum",
          description: "Trends is a machine learning tool that helps doctors diagnose diseases based on the symptoms users exhibit. Trends displays a list of probable diseases from given symptoms and provides trends of symptoms that appear seasonally.",
          responsibilities: [
            "Daily Scrum Meetings",
            "Design the Technical Flow for the Application",
            "UI and Backend Design and Development",
            "Angular Frontend Development with Dot Net Core Backend"
          ]
        },
        {
          name: "E-Learning Workbench",
          duration: "August-2018 to May-2019",
          role: "Full Stack Developer",
          technologies: "Dot Net, Angular, SQL, Microsoft SQL Server, GIT, Azure DevOps, Jira",
          description: "E-Learning Workbench is an E-learning platform where students and developers can learn coding and undertake coding-related assessments. The workbench provides various coding assignments that help users learn while coding.",
          responsibilities: [
            "Full Stack Developer (Dot Net + Angular + SQL)",
            "Requirements Gathering and API Creation",
            "UI Design and Enhancements",
            "Jira Planning",
            "Team Management"
          ]
        }
      ],
      achievements: [
        "Promoted Thrice in the Last Four Years at Virtusa (Associate Software Engineer -> Software Engineer -> Associate Consultant -> Senior Software Engineer)",
        "Oracle Certified Associate Java SE 8 Programmer (2020)",
        "Certification in Java Programming from Microsoft Technology Associate",
        "Identified as the Top Performer for FY22 at Virtusa",
        "Awarded by the Global Delivery Head as a Mark of Appreciation for Efforts in GCTS Team",
        "Provided Major Design and Development Contributions for Patent US-11604662-B2"
      ],
      contactNo: "8328619345",
      email: "suryanarayananunna0612@gmail.com"
    };

    return of(mockData); // `of` creates an Observable that emits the mock data
  }
}
