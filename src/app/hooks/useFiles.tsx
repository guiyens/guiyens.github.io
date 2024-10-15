"use client";

import { useState } from "react";

export interface ProjectFile {
  name: string;
  type: string;
  isActive: boolean;
  isOpen: boolean;
  languaje: string;
  content?: string;
  files?: Array<ProjectFile>;
  isChild?: boolean;
  parent?: string;
}

export default function useFiles() {
  const [files, setFiles] = useState<Array<ProjectFile>>([
    {
      name: "data",
      type: "folder",
      isActive: false,
      isOpen: true,
      languaje: "",
      files: [
        {
          name: "workExperience.json",
          type: "json",
          isActive: false,
          isOpen: false,
          languaje: "json",
          isChild: true,
          parent: "data",
          content: `[
  {
    "companyName": "S4T",
    "role": "Senior Frontend engineer",
    "start": "09/08/2023",
    "end": "",
    "description": "At the beginning, I worked on a clinical trials manager build with react in old versions (Pre hooks) Css3 ang HTML5 for 6 months. After
    that I have been involved in the launch of a Site trial manager build with angular 17, Microfrontends with Nx. Here every develop in wrap with DDD architecture
    min-height: 100%;and clean code practices."
  },
  {
    "companyName": "Empathy",
    "role": "Senior Frontend engineer",
    "start": "01/03/2022",
    "end": "09/08/2023",
    "description": "In Empathy I was involved in the result grid of Zara ecommerce and some other mechants from Inditex Group. There we used vue 2 and 3
    (We migrate it 2 to 3 vue version) with typescript, css3 and html5. We used scrum frame work to mange the develop workflows."
  },
  {
    "companyName": "Savia",
    "role": "Senior Frontend developer",
    "start": "01/07/2017",
    "end": "01/03/2022",
    "description": "Frontend responsable (three people in my team). We are developing apps for public human resources on Spain.
    Skills: HTML5, CSS3, Sass, Js, Angularjs, Vuejs, Typescript, BEM, Jasmine, Karma, Mocha, Jest, Cypress, Postman"
  },
  {
    "companyName": "Avansis",
    "role": "Senior Frontend Developer",
    "start": "01/10/2016",
    "end": "30/06/2017",
    "description": "Client: Telefónica I+D. We developed a prototype of Movistar plus app, an hibrid aplication for Tv devices related to live streming videochats
    during the sport broadcast. Skills: HTML, CSS3, JS (native)"
  },
  {
    "companyName": "Pasiona",
    "role": "Senior Frontend developer",
    "start": "01/06/2015",
    "end": "30/09/2016",
    "description": "Client: Microsoft España. I build a Windows 10 app simulator on web. In the context of a CMS web to build Windows 10 application and Windows Phone.
    Skills: HTML5, JS, CSS3, TypeScript, knockoutjs, Jasmine"
  },
  {
    "companyName": "Bloombees",
    "role": "Frontend developer",
    "start": "27/11/2014",
    "end": "30/05/2015",
    "description": "Developing a web responsive application with HTML5, CSS3 y JQUERY."
  },
  {
    "companyName": "GOWEX",
    "role": "Frontend Developer",
    "start": "06/09/2012",
    "end": "01/08/2014",
    "description": "When I fell in love with programming I had the great oppotunity to moving to development department were I could develop every skills that I learned.
    I left jquery plugins from other I made mines, and I developed my own javascript libraries. One day curiosity bit me and I started studiying JAVA, because my new
    coworkers in my new department were JAVA developers. So now I ́m studiying a Master JAVA EE. Here I've worked in proyects like: Chrome add-ons, my own css & js framework,
    a geolocation advertisen plataform..."
  },
  {
    "companyName": "GOWEX",
    "role": "Layout Developer ( HTML5 y CSS3)",
    "start": "11/11/2011",
    "end": "06/09/2012",
    "description": "At the begining, I just work with HTML5 and CSS3 building several web sites like geolocation advertising portals, landing pages.... But I started studying"
  }
]`,
        },
        {
          name: "frontendSkills.json",
          type: "json",
          isActive: false,
          isOpen: false,
          languaje: "json",
          isChild: true,
          parent: "data",
          content: `[
  {
    "name": "ANGULAR.JS",
    "yearsUsing": 4
  },
  {
    "name": "HTML5",
    "yearsUsing": 14
  },
  {
    "name": "VUEJS (v2 - v3)",
    "yearsUsing": 5
  },
  {
    "name": "ANGULAR (v17)",
    "yearsUsing": 1
  },
  {
    "name": "REACT (v14)",
    "yearsUsing": 1
  },
  {
    "name": "JAVASCRIPT",
    "yearsUsing": 14
  },
  {
    "name": "TYPESCRIPT",
    "yearsUsing": 6
  },
  {
    "name": "CSS3",
    "yearsUsing": 14
  },
  {
    "name": "SASS",
    "yearsUsing": 8
  },
  {
    "name": "TAILWIND",
    "yearsUsing": 2
  },
  {
    "name": "NX (Microfrontends)",
    "yearsUsing": 1
  },
  {
    "name": "JEST",
    "yearsUsing": 7
  },
  {
    "name": "MOCHA",
    "yearsUsing": 1
  },
  {
    "name": "KARMA",
    "yearsUsing": 4
  },
  {
    "name": "JASMINE",
    "yearsUsing": 4
  },
  {
    "name": "CYPRESS",
    "yearsUsing": 2
  },
  {
    "name": "PUPPERTEER",
    "yearsUsing": 2
  },
  {
    "name": "ISTAMBUL",
    "yearsUsing": 8
  },
  {
    "name": "JQUERY",
    "yearsUsing": 5
  },
  {
    "name": "BOOTSTRAP",
    "yearsUsing": 10
  }
]`,
        },
        {
          name: "backendSkills.json",
          type: "json",
          isActive: false,
          isOpen: false,
          languaje: "json",
          isChild: true,
          parent: "data",
          content: `[
  {
    "name": "NODE.JS",
    "yearsUsing": 4
  },
  {
    "name": "EXPRESS",
    "yearsUsing": 2
  },
  {
    "name": "NETCORE",
    "yearsUsing": 1
  }
]`,
        },
        {
          name: "designSkills.json",
          type: "json",
          isActive: false,
          isOpen: false,
          languaje: "json",
          isChild: true,
          parent: "data",
          content: `[
  {
    "name": "MATERIAL DESIGN SISTEM",
    "yearsUsing": 7
  },
  {
    "name": "CARBON DESIGN SISTEM",
    "yearsUsing": 7
  },
  {
    "name": "FIGMA",
    "yearsUsing": 7
  },
  {
    "name": "PHOTOSHOP",
    "yearsUsing": 5
  },
  {
    "name": "ILUSTRATOR",
    "yearsUsing": 3
  },
  {
    "name": "SKETCH",
    "yearsUsing": 2
  },
  {
    "name": "BALSAMIQ",
    "yearsUsing": 2
  }
]`,
        },
        {
          name: "devSkills.json",
          type: "json",
          isActive: false,
          isOpen: false,
          languaje: "json",
          isChild: true,
          parent: "data",
          content: `[
  {
    "name": "Clean Code",
    "yearsUsing": 5
  },
  {
    "name": "SOLID",
    "yearsUsing": 5
  },
  {
    "name": "Unit Testing",
    "yearsUsing": 8
  },
  {
    "name": "E2E Testing",
    "yearsUsing": 5
  },
  {
    "name": "DDD",
    "yearsUsing": 3
  },
  {
    "name": "SCRUM",
    "yearsUsing": 8
  },
  {
    "name": "Clean Architecture",
    "yearsUsing": 3
  },
    {
    "name": "Dev flows optimization",
    "yearsUsing": 3
  },
]`,
        },
      ],
    },
    {
      name: "models",
      type: "folder",
      isActive: false,
      isOpen: true,
      languaje: "",
      files: [
        {
          name: "Person.ts",
          type: "ts",
          isActive: false,
          isOpen: false,
          languaje: "typeScript",
          isChild: true,
          parent: "models",
          content: `export interface Person {
  name: string;
  yearsOld: number;
  email: string;
  linkedIn: string;
  personalSkills: Array<string>;
}`,
        },
        {
          name: "Developer.ts",
          type: "ts",
          isActive: false,
          isOpen: false,
          languaje: "typeScript",
          isChild: true,
          parent: "models",
          content: `import {PRInteraction, DevTypes} from  "./Utils/types";

          
export interface Developer {
  github: string;
  yearsOfExperticeAsFrontEnd: number;
  yearsOfExperticeAsBackend: number;
  devFocus: DevTypes;
  reviewCode: (pr: { checkCode(): PRInteraction }) => PRInteraction;
  testCode: (codeTotest: string) => Boolean | Error;
  writeCode: () => void;
  buildCode: () => Package;
  helpColleagues: () => Help;
}`,
        },
        {
          name: "TechLead.ts",
          type: "ts",
          isActive: false,
          isOpen: false,
          languaje: "typeScript",
          isChild: true,
          parent: "models",
          content: `import {Meeting, PRInteraction, Help, QualityReport} from  "./Utils/types";

          
export interface TechLead {
  yearsOfExperticeLeading: number;
  interactOtherAreas: () => Meeting;
  helpColleagues: () => Help;
  provideCodeQualityGates: () => QualityReport;
  ApproveCode: (pr: { checkedCode: boolean }) => PRInteraction;
}`,
        },
        {
          name: "ScrumMaster.ts",
          type: "ts",
          isActive: false,
          isOpen: false,
          languaje: "typeScript",
          isChild: true,
          parent: "models",
          content: `import {Action} from  "./Utils/types";

export interface ScrumMaster {
  yearsOfExperticeScrumMarter: number;
  manageRetro(): Array<Action>;
  manageScrumStats(): Report;
}`,
        },
      ],
    },
    {
      name: "utils",
      type: "folder",
      isActive: false,
      isOpen: true,
      languaje: "",
      files: [
        {
          name: "types.ts",
          type: "ts",
          isActive: false,
          isOpen: false,
          languaje: "typeScript",
          isChild: true,
          parent: "utils",
          content: `export type PRInteraction = "Commnet" | "Suggestion" | "Approve";

export type Help = "Pair_programing" | "Software_walkthrough" | "Code_kata";

export enum DevTypes {
  Frontend,
  Backend,
  FullStack,
}

export type Meeting = "Call" | "Video Call" | "Afterwork" | "Meetup";

export interface Action {
  responsable: string;
  name: string;
  expirationDate: Date;
}

export interface QualityReport {
  name: string;
  description: string;
  date: Date;
  status: string;
  codeCoverage: string;
  codeQuality: string;
  techDebt: number;
  bugs: string;
}

export interface ScrumReport {
  sprintGoalCompletion: boolean;
  sprintVelocity: number;
  sprintSatisfaction: number;
  sprintBurnDown: Chart;
}


export interface Package {
  files: Array<File>;
}`,
        },
      ],
    },
    {
      name: "assets",
      type: "folder",
      isActive: false,
      isOpen: true,
      languaje: "",
      files: [
        {
          name: "me.scss",
          type: "scss",
          isActive: false,
          isOpen: false,
          languaje: "scss",
          isChild: true,
          parent: "assets",
          content: `.guillermo-ramos-vega {
    height: toRem('175cm');
    font-weight: toFontWeight('74kg');

    &__hair {
        background-color: #333333;
        height: toRem('5cm');

        &--in-summer {
            height: toRem('1cm');
        }
    }

    &__eyes {
        background-color: #512424;
        border-radius: 50%;
    }
    
}
          `,
        },
      ],
    },
    {
      name: "GuillermoRamosVega.ts",
      type: "ts",
      isActive: false,
      isOpen: true,
      languaje: "javascript",
      content: `import {Person, Developer, TechLead, ScrumMaster} from  "./models";
import {PRInteraction, Help, DevTypes, Meeting, Action, QualityReport, Package} from  "./utils/types";
import {workExperience, frontendSkills, backendSkills, designSkills, devSkills,} from "./data";

export class GuillermoRamosVega  implements Person, Developer, TechLead, ScrumMaster {

 //Personal data
  name: string = "Guillermo Ramos Vega";
  yearsOld: number = 40;
  email: string = "guiyens@gmail.com";
  linkedIn: string = "https://es.linkedin.com/in/guiyens";
  personalSkills: Array<string> = [
    "Team player",
    "Problem solver",
    "Fast learner",
    "Proactive",
  ];

  //Dev data
  github: string = "https://github.com/guiyens";
  devFocus: DevTypes = DevTypes.frontEnd;
  yearsOfExperticeAsFrontEnd = 14;
  yearsOfExperticeAsBackend = 2;
  yearsOfExperticeLeading: number = 5;
  yearsOfExperticeScrumMarter: number = 2;

  //Check the file data/workExperience.json
  workExperience: Array<{ CompanyName: string; role: string, start: Date; end: Date }> =
    workExperience;

  //Check the file data/frontendSkills.json
  frontendSkills: Array<{ name: string; yearsUsing: number }> =
    frontendSkills;

  //Check the file data/backendSkills.json
  backendSkills: Array<{ name: string; yearsUsing: number }> =
    backendSkills;

  //Check the file data/designSkills.json
  designSkills: Array<{ name: string; yearsUsing: number }> = designSkills;

  //Check the file data/devSkills.json
  devSkills: Array<{ name: string; yearsUsing: number }> = [
    devSkills,
  ];

  // AS I AM UNIQUE, I AM A SINGLETON PATTERN
  static #me: GuillermoRamosVega;
  constructor() {}
  static get instance(): GuillermoRamosVega {
    if (!GuillermoRamosVega.#me) {
      GuillermoRamosVega.#me = new GuillermoRamosVega();
    }

    return GuillermoRamosVega.#me;
  }

  writeCode(): void {
    return console.log("Writing code...");
  }

  reviewCode(pr: { checkCode(): PRInteraction }): PRInteraction {
    return pr.checkCode();
  }

  ApproveCode(pr: { checkedCode: boolean }): PRInteraction {
    return pr.checkedCode ? "Approved" : "Commnet";
  }

  testCode(codeTotest: string): Boolean | Error {
    return expect(isGoldCode(codeTotest)).toBeTruthy();
  }

  buildCode(): Package {
    return {
      files: [
        {
          name: "dist/index.html",
          content: "<html><body><h1>Hello World</h1><<body>/html>",
        },
        {
          name: "dist/index.js",
          content: "console.log('Hello World');",
        },
        {
          name: "dist/index.css",
          content: "h1 {color: red;}",
        },
      ],
  };
  
  helpColleagues(): Help {
    return "Pair_programing";
  }

  interactOtherAreas(): Meeting {
    return "Meetup";
  }

   provideCodeQualityGates(): QualityReport {
    return {
      name: "Code Quality",
      description: "Code Quality (With SonarQube)",
      date: new Date(),
      status: "OK",
      codeCoverage: "90%",
      codeQuality: "A",
      techDebt: 10800000,
      bugs: "23",
    };
  }

  manageRetro(): Array<Action> {
    return [
      {
        responsable: "Dev or QA or PO or Designer",
        name: "Action 1",
        expirationDate: new Date("2025-04-01"),
      },
      {
        responsable: "Dev or QA or PO or Designer",
        name: "Action 2",
        expirationDate: new Date("2025-04-01"),
      },
      {
        responsable: "Dev or QA or PO or Designer",
        name: "Action 3",
        expirationDate: new Date("2025-04-01"),
      },
    ];
  }
    
  manageScrumStats(): ScrumReport {
    return {
      sprintGoalCompletion: true,
      sprintVelocity: 10,
      sprintSatisfaction: 10,
      sprintBurnDown: new Chart(),
    };
  }

  
}`,
    },
    {
      name: "package.json",
      type: "json",
      isActive: false,
      isOpen: false,
      languaje: "json",
      content: `{
  "name": "GuilleDev",
  "version": "6.0.0",
  "author": "Guillermo Ramos Vega",
}
      `,
    },
    {
      name: "README.md",
      type: "md",
      isActive: true,
      isOpen: true,
      languaje: "plaintext",
      content: `
                                                                      WELLCOME TO
              
        ⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀        ==================================================================================
        ⠀⠀⠀⠀⣠⣧⠷⠆⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀                
        ⠀⠀⣐⣢⣤⢖⠒⠪⣭⣶⣿⣦⠀⠀⠀⠀⠀⠀⠀         ⠀⣿⣿⣿⣿⣿⣿  ⣿⣿⠀⠀⠀⣿⣿  ⣿⣿  ⣿⣿⠀⠀⠀⠀  ⣿⣿⠀⠀⠀⠀  ⣿⣿⣿⣿⣿⣿  ⣿⣿⣿⣿⣿⠀⠀  ⣿⣿⣿⣿⣿⣿  ⣿⣿⠀⠀⠀⠀⠀⠀⣿⣿
        ⠀⢸⣿⣿⣿⣌⠀⢀⣿⠁⢹⣿⡇⠀⠀⠀⠀⠀⠀         ⣿⣿⠀⠀⠀⠀⠀  ⣿⣿⠀⠀⠀⣿⣿  ⣿⣿  ⣿⣿⠀⠀⠀⠀  ⣿⣿⠀⠀⠀⠀  ⣿⣿⠀⠀⠀⠀  ⣿⣿⠀⠀⠀⣿⣿  ⣿⣿⠀⠀⠀⠀  ⠀⣿⣿⠀⠀⠀⠀⣿⣿⠀ 
        ⠀⢸⣿⣿⣿⣿⣿⡿⠿⢖⡪⠅⢂⠀⠀⠀⠀⠀⠀         ⣿⣿⠀⣿⣿⣿⣿  ⣿⣿⠀⠀⠀⣿⣿  ⣿⣿  ⣿⣿⠀⠀⠀⠀  ⣿⣿⠀⠀⠀⠀  ⣿⣿⣿⣿⣿⠀  ⣿⣿⠀⠀⠀⣿⣿  ⣿⣿⣿⣿⣿⠀  ⠀⠀⣿⣿⠀⠀⣿⣿⠀⠀   
        ⠀⠀⢀⣔⣒⣒⣂⣈⣉⣄⠀⠺⣿⠿⣦⡀⠀⠀⠀         ⣿⣿⠀⠀⠀⣿⣿  ⣿⣿⠀⠀⠀⣿⣿  ⣿⣿  ⣿⣿⠀⠀⠀⠀  ⣿⣿⠀⠀⠀⠀  ⣿⣿⠀⠀⠀⠀  ⣿⣿⠀⠀⠀⣿⣿  ⣿⣿⠀⠀⠀⠀  ⠀⠀⠀⣿⣿⣿⣿⠀⠀⠀                    
        ⠀⡴⠛⣉⣀⡈⠙⠻⣿⣿⣷⣦⣄⠀⠛⠻⠦⠀⠀         ⣿⣿⣿⣿⣿⣿⠀  ⣿⣿⣿⣿⣿⣿⣿  ⣿⣿  ⣿⣿⣿⣿⣿⣿  ⣿⣿⣿⣿⣿⣿  ⣿⣿⣿⣿⣿⣿  ⣿⣿⣿⣿⣿⠀⠀  ⣿⣿⣿⣿⣿⣿  ⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀          
        ⡸⠁⢾⣿⣿⣁⣤⡀⠹⣿⣿⣿⣿⣿⣷⣶⣶⣤⠀  
        ⡇⣷⣿⣿⣿⣿⣿⡇⠀⣿⣿⣿⣿⣿⣿⡿⠿⣿⡀        ===================================================================================
        ⡇⢿⣿⣿⣿⣟⠛⠃⠀⣿⣿⣿⡿⠋⠁⣀⣀⡀⠃         
        ⢻⡌⠀⠿⠿⠿⠃⠀⣼⣿⣿⠟⠀⣠⣄⣿⣿⡣⠀         HI! I AM GUILLERMO RAMOS VEGA AND THIS IS MY WEB DEVELOPER PORTFOLIO. 
        ⠈⢿⣶⣤⣤⣤⣴⣾⣿⣿⡏⠀⣼⣿⣿⣿⡿⠁⠀         This is a conceptual project that I made to show my skills as a web developer. Probably it is not
        ⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⠀⠀⣩⣿⡿⠋⠀⠀⠀         easy to understand if you are not a technical person. If this is the case, you can get
        ⠀⠀⠀⠀⠈⠙⠛⠿⠿⠿⠇⠀⠉⠁⠀⠀⠀⠀⠀         my CV in pdf format from the project explorer sidebar (left side).


        The concep of this website is showing my skills, expertice and what I do any working day (like write, test and review code )
        as the typical web front project structure in a IDE. But I didn't want to use a real web instance of VSC (in this case).
        So I have created a clone of VSC with the basic funcionality for my purpose.

        === ABOUT THE VSC CLONE ===

        What I tried to clone from the orinigal VSC is the following:
        - The main UI interface
        - Funcionality:
          + Open and close files: Open from files explorer in the left sidebar clicing on the file name. Close from the x icon the top tabs.
          + Active files from top tabs: Cliking on the the top tabs
          + Open and close the Explorer sidebar: Clicking on the first icon in the icons bar.
          + Show diferent code languages: Just opening diferent files you can see code in diferent languages.
          + Change the code editor theme: You can choose theme clicking in the Wheele icon in the bottom left corner, and selecting the theme.

        
          === ABOUT THE 'FAKE' PROJECT ===

        As I said the idea is showing my skills, expertice... as the typical web front project structure in a IDE. But just this.
        This is not coplilable code, its near to be but it is not.

        For my purpose I defined a class with my name on root of the project (GuillermoRamosVega.ts), which could work as the entry point of the project.
        In this class you can see the main data about me. The props in this class are segregated by interfaces that give you and idea about what roles had
        in the pass in a dev team.
        
        However to get it more redable I extracted some static data from this class and put it in
        some json files in the folder 'data'. For instance if you want to check my working experience you can open the file 'workingExperience.json' on data folder.
        Going further, I tried to make a nod to other tipical files a front end project like package.json, README.md, .gitignore, .scss, etc.
 
        === ABOUT THE REAL PROJECT ===

        This project is built this:
          - React 18: Components, hooks and reactivity is what I use from this framework
          - Typescript: I use typescript because I prefere to write code with types.
          - Tailwind 3.4: It is not my favorite one but it gave me development speed.
          - react-syntax-highlighter: To display code and thematize code colors.

        I HOPE YOU ENJOY IT!
        Feel free to contact me (by mail or linkedin) if you want to know more about me.
`,
    },
    {
      name: ".guilleignore",
      type: "git",
      isActive: false,
      isOpen: false,
      languaje: "plaintext",
      content: `# Tecnologies
tecnologies/jquery
tecnologies/angularjs

# Working flows
waterfall
verticalManagement
      `,
    },
  ]);

  function setOPenFile(name: string, parent?: ProjectFile) {
    const newFiles = files.map((file) => {
      if (!!parent && parent?.name === file.name) {
        return {
          ...parent,
          files: file.files?.map((fileInFolder) => {
            if (fileInFolder.name === name) {
              return {
                ...fileInFolder,
                isOpen: true,
                isActive: true,
              };
            }
            return {
              ...fileInFolder,
              isActive: false,
            };
          }),
        };
      }

      if (file.name === name) {
        return {
          ...file,
          isOpen: true,
          isActive: true,
        };
      }

      if (file.type === "folder") {
        return {
          ...file,
          isActive: false,
          files: file.files?.map((fileInFolder) => {
            return {
              ...fileInFolder,
              isActive: false,
            };
          }),
        };
      }

      return {
        ...file,
        isActive: false,
      };
    });
    setFiles(newFiles);
  }

  function closeFile(
    e: Event,
    fileToModify: ProjectFile,
    parent?: ProjectFile
  ) {
    e.stopPropagation();

    const { name, isActive } = fileToModify;
    const newFiles = files.map((file) => {
      if (!!parent && parent?.name === file.name) {
        return {
          ...parent,
          files: file.files?.map((fileInFolder) => {
            if (fileInFolder.name === name) {
              return {
                ...fileInFolder,
                isOpen: false,
                isActive: false,
              };
            }
            return {
              ...fileInFolder,
            };
          }),
        };
      }

      if (file.name === name) {
        return {
          ...file,
          isOpen: false,
          isActive: false,
        };
      }

      return {
        ...file,
      };
    });

    setFiles(() => newFiles);
    if (isActive) {
      activeFirtOpenFile(newFiles, fileToModify);
    }
  }

  function activeFirtOpenFile(
    newFiles: ProjectFile[],
    closedFile: ProjectFile
  ) {
    const firstFileOpen = newFiles
      .reduce((acumulator: ProjectFile[], obj: ProjectFile) => {
        if (obj.type === "folder") {
          acumulator = acumulator.concat(obj.files!);
        } else {
          acumulator.push(obj);
        }
        return acumulator;
      }, [])
      .find((file) => file.isOpen);

    const filesUpdatedActive = newFiles.map((file) => {
      if (firstFileOpen?.isChild && file.name === firstFileOpen?.parent) {
        return {
          ...file,
          files: file.files?.map((fileInFolder) => {
            return {
              ...fileInFolder,
              isActive:
                firstFileOpen?.name === fileInFolder.name &&
                firstFileOpen?.name !== closedFile.name,
            };
          }),
        };
      }
      return {
        ...file,
        isActive:
          (firstFileOpen?.name === file.name &&
            firstFileOpen?.name !== closedFile.name) ||
          file.isActive,
      };
    });

    setFiles(() => filesUpdatedActive);
  }

  return {
    files,
    setFiles,
    setOPenFile,
    closeFile,
  };
}
