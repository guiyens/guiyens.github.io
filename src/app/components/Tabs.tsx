"use client";

import { VscClose } from "react-icons/vsc";
import { ProjectFile } from "../hooks/useFiles";
import { fileIcons } from "./Sidebar";
import React from "react";

export default function Tabs(props: {
  files: ProjectFile[];
  setOPenFile: (name: string, parent?: ProjectFile) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  closeFile: (e: any, fileToModify: ProjectFile, parent?: ProjectFile) => void;
}) {
  const { files, closeFile, setOPenFile } = props;
  return (
    <section className="h-8 flex w-full overflow-x-auto">
      {files.map((file) => {
        const { isOpen } = file;
        return (
          <React.Fragment key={file.name}>
            {file.type !== "folder" && isOpen && (
              // file.type !== "folder" && (
              <div
                className={`flex items-center pl-4 py-1 cursor-pointer justify-between borderColor border-b border-r group hover:bg-[#1f1f1f] hover:border-b-0 ${
                  file.isActive &&
                  "bg-[#282a36] border-b-0 border-t-2 !border-t-[#0278D4] hover:bg-[#282a36]"
                }`}
                onClick={() => setOPenFile(file.name)}
              >
                <div className="text-[13px] flex items-center gap-1">
                  {fileIcons(12)[file.type as keyof typeof fileIcons]}
                  <span
                    className={`text-[12px] ${file.isActive && "text-white"}`}
                  >
                    {file.name}
                  </span>
                </div>
                <div
                  className="p-[2px] m-1 ml-3 hover:bg-[#343434] rounded-sm invisible group-hover:visible"
                  onClick={(e) => closeFile(e, file)}
                >
                  <VscClose size={14} />
                </div>
              </div>
            )}
            {
              //file.type !== "folder" && file.isOpen && (
              file.type === "folder" &&
                file.files?.map((fileInfolder) => {
                  const { isOpen } = fileInfolder;
                  if (isOpen) {
                    return (
                      <div
                        key={fileInfolder.name}
                        className={`flex items-center pl-4 py-1 cursor-pointer justify-between borderColor border-b border-r group hover:bg-[#1f1f1f] hover:border-b-0 ${
                          fileInfolder.isActive &&
                          "bg-[#282a36] border-b-0 border-t-2 !border-t-[#0278D4]"
                        }`}
                        onClick={() => setOPenFile(fileInfolder.name, file)}
                      >
                        <span className="text-[13px] flex items-center gap-1">
                          {
                            fileIcons(12)[
                              fileInfolder.type as keyof typeof fileIcons
                            ]
                          }
                          <span className="text-[12px]">
                            {fileInfolder.name}
                          </span>
                        </span>
                        <span className="p-[2px] m-1 ml-3 hover:bg-[#343434] rounded-sm invisible group-hover:visible">
                          <VscClose
                            size={14}
                            onClick={(e) => closeFile(e, fileInfolder, file)}
                          />
                        </span>
                      </div>
                    );
                  }
                })
            }
          </React.Fragment>
        );
      })}
    </section>
  );
}
