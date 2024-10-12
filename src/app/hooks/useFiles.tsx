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
  bithday: Date;
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
  yearsOfExperticeTotal: number;
  yearsOfExperticeFrontEnd: number;
  yearsOfExperticeFullStack: number;
  github: string;
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
  startLeadingYear: number;
  yearsOfExperticeLeading: () => number;
  interactOtherAreas: () => Meeting;
  helpColleagues: () => Help;
  provideCodeQualityGates: () => QualityReport;
  ApproveCode: (pr: { checkCode(): PRInteraction }) => PRInteraction;
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
  startScrumMarterYear: number;
  yearsOfExperticeScrumMaster(): number;
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
    height: 1.75cm;
    width: 1;

    &__hear {
        color: #333333;
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
      languaje: "typeScript",
      content: `import {Person, Developer, TechLead, ScrumMaster} from  "./models";
import {PRInteraction, Help, DevTypes, Meeting, Action, QualityReport, Package} from  "./utils/types";
      
export class GuillermoRamosVega  implements Person, Developer, TechLead, ScrumMaster {

  name: string = "Guillermo Ramos Vega";
  bithday: Date = new Date(1984, 27, 8);
  email: string = "guiyens@gmail.com";
  linkedIn: string = "https://es.linkedin.com/in/guiyens";
  //TODO
  personalSkills: Array<string> = [""];
  startWorkingYear: number = 2010;
  github: string = "https://github.com/guiyens";
  devFocus: DevTypes = DevTypes.FullStack;
  //TODO
  technologiesFrontend: Array<string> = [""];
  //TODO
  designSkills: Array<string> = [""];
  //TODO
  technologiesBackend: Array<string> = [""];
  startScrumMarterYear: number = 2020;
  startLeadingYear: number = 2017;

  static #me: GuillermoRamosVega;

  constructor() {}

  // AS I AM UNIQUE, I AM A SINGLETON PATTERN
  static get instance(): GuillermoRamosVega {
  if (!GuillermoRamosVega.#me) {
    GuillermoRamosVega.#me = new GuillermoRamosVega();
  }

  return GuillermoRamosVega.#me;
  }

  public yearsOfExperticeLeading(): number {
  throw new Error("Method not implemented.");
  }

  yearsOfExpertice(): number {
  return new Date().getFullYear() - this.startWorkingYear;
  }
  reviewCode(pr: { checkCode(): PRInteraction }): PRInteraction {
  return pr.checkCode();
  }
  testCode(codeTotest: string): Boolean | Error {
  return expect(isGoldCode(codeTotest)).toBeTruthy();
  }
  writeCode(): void {
  return console.log("Writing code...");
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
  }
  helpColleagues(): Help {
  return "Pair_programing";
  }
  yearsOfExperticeAsFrontEnd(): number {
  return 14;
  }
  yearsOfExperticeAsBackend(): number {
  return 2;
  }
  yearsOfExperticeAsLeading(): number {
  return 5;
  }
  interactOtherAreas(): Meeting {
  //TODO
  }

  provideCodeQuality(): QualityReport {
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
  yearsOfExperticeScrumMaster(): number {
  //TODO
  }
  manageRetro(): Array<Action> {
  //TODO
  }
  manageScrumStats(): Report {
  //TODO
  }
}
`,
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
        ⠈⢿⣶⣤⣤⣤⣴⣾⣿⣿⡏⠀⣼⣿⣿⣿⡿⠁⠀         
        ⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⠀⠀⣩⣿⡿⠋⠀⠀⠀         
        ⠀⠀⠀⠀⠈⠙⠛⠿⠿⠿⠇⠀⠉⠁⠀⠀⠀⠀⠀  
                                  
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
        debugger;
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
