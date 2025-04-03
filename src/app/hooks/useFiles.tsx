"use client";

import { useState } from "react";
import {filesContent} from "../../app/constants/filesContent";

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
  const [files, setFiles] = useState<Array<ProjectFile>>(filesContent);

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
