import {
  VscDebugAlt,
  VscFiles,
  VscGitMerge,
  VscSearch,
  VscExtensions,
  VscEllipsis,
  VscChevronDown,
  VscChevronRight,
  VscJson,
  VscSettingsGear,
  VscFilePdf,
} from "react-icons/vsc";
import { TbBrandTypescript } from "react-icons/tb";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { IoFolder } from "react-icons/io5";
import { FaSass } from "react-icons/fa6";

import { ProjectFile } from "../hooks/useFiles";
import React, { Dispatch, SetStateAction } from "react";

export const fileIcons = (size: number) => ({
  ts: <TbBrandTypescript size={size} />,
  git: <FaGitAlt size={size} />,
  json: <VscJson size={size} />,
  md: <IoIosInformationCircleOutline size={size} />,
  folder: <IoFolder />,
  scss: <FaSass />,
});

const themeOptions = [
  "a11y-dark",
  "a11y-light",
  "agate",
  "an-old-hope",
  "androidstudio",
  "arduino-light",
  "arta",
  "ascetic",
  "atelier-cave-dark",
  "atelier-cave-light",
  "atelier-dune-dark",
  "atelier-dune-light",
  "atelier-estuary-dark",
  "atelier-estuary-light",
  "atelier-forest-dark",
  "atelier-forest-light",
  "atelier-heath-dark",
  "atelier-heath-light",
  "atelier-lakeside-dark",
  "atelier-lakeside-light",
  "atelier-plateau-dark",
  "atelier-plateau-light",
  "atelier-savanna-dark",
  "atelier-savanna-light",
  "atelier-seaside-dark",
  "atelier-seaside-light",
  "atelier-sulphurpool-dark",
  "atelier-sulphurpool-light",
  "atom-one-dark",
  "atom-one-dark-reasonable",
  "atom-one-light",
  "brown-paper",
  "codepen-embed",
  "color-brewer",
  "darcula",
  "dark",
  "default-style",
  "docco",
  "dracula",
  "far",
  "foundation",
  "github",
  "github-gist",
  "gml",
  "googlecode",
  "gradient-dark",
  "gradient-light",
  "grayscale",
  "gruvbox-dark",
  "gruvbox-light",
  "hopscotch",
  "hybrid",
  "idea",
  "ir-black",
  "isbl-editor-dark",
  "isbl-editor-light",
  "kimbie.dark",
  "kimbie.light",
  "lightfair",
  "lioshi",
  "magula",
  "mono-blue",
  "monokai",
  "monokai-sublime",
  "night-owl",
  "nnfx",
  "nnfx-dark",
  "nord",
  "obsidian",
  "ocean",
  "paraiso-dark",
  "paraiso-light",
  "pojoaque",
  "purebasic",
  "qtcreator_dark",
  "qtcreator_light",
  "railscasts",
  "rainbow",
  "routeros",
  "school-book",
  "shades-of-purple",
  "solarized-dark",
  "solarized-light",
  "srcery",
  "stackoverflow-dark",
  "stackoverflow-light",
  "sunburst",
  "tomorrow",
  "tomorrow-night",
  "tomorrow-night-blue",
  "tomorrow-night-bright",
  "tomorrow-night-eighties",
  "vs",
  "vs2015",
  "xcode",
  "xt256",
  "zenburn",
];

export default function Sidebar(props: {
  files: ProjectFile[];
  setOPenFile: (name: string, parent?: ProjectFile) => void;
  setCodeTheme: Dispatch<SetStateAction<string>>;
  codeThemeSelected: string;
  isPanelSettingsActive: boolean;
  setIsPanelSettingsActive: Dispatch<SetStateAction<boolean>>;
  isMenuDisplayed: boolean;
  setIsMenuDisplayed: Dispatch<SetStateAction<boolean>>;
  dimensions: {
    width: number;
    height: number;
  };
}) {
  const {
    files,
    setOPenFile,
    setCodeTheme,
    codeThemeSelected,
    isPanelSettingsActive,
    setIsPanelSettingsActive,
    isMenuDisplayed,
    setIsMenuDisplayed,
  } = props;

  // useEffect(() => {
  //   document.body.addEventListener("click", () => {
  //     setIsPanelSettingsActive(false);
  //   });
  // }, []);

  function openCvPdfEs() {
    window.open("/GuillemroRamos_CV_En.pdf", "_blank");
  }
  function openCvPdfEn() {
    window.open("/GuillemroRamos_CV_Es.pdg", "_blank");
  }

  return (
    <aside
      className={`transition-all duration-1000 shrink-0 borderColor overflow-hidden border-r flex ${
        isMenuDisplayed ? "w-[350px]" : "w-[47px]"
      }`}
    >
      <div className="borderColor border-r h-full text-[#868686] flex flex-col justify-between">
        <div className="flex flex-col items-center w-[47px]">
          <div
            className="text-white border-l-4 border-solid border-[#0278D4] w-[47px] py-3"
            onClick={() => setIsMenuDisplayed(!isMenuDisplayed)}
          >
            <VscFiles size={23} className="mx-auto" />
          </div>
          <div className="py-3">
            <VscSearch size={23} />
          </div>

          <div className="py-3">
            <VscGitMerge size={23} />
          </div>

          <div className="py-3">
            <VscDebugAlt size={23} />
          </div>

          <div className="py-3">
            <VscExtensions size={23} />
          </div>
        </div>
        <div className="w-[47px] flex flex-col items-center">
          <div
            className="py-3 text-white cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsPanelSettingsActive(!isPanelSettingsActive);
            }}
          >
            <VscSettingsGear size={23} />
          </div>
          {isPanelSettingsActive && (
            <div className="absolute w-[250px] h-[300px] left-11 bottom-8 bg-[rgb(24,24,24)] borderColor border rounded-md py-3">
              <p className="text-[15px] text-[#cccccc] borderColor border-b pb-2 w-[210px] mx-auto">
                Select Code Theme
              </p>
              <div className="overflow-x-hidden overflow-y-auto h-[253px]">
                {themeOptions.map((theme) => {
                  const codeThemeTransform =
                    codeThemeSelected[0].toLowerCase() +
                    codeThemeSelected.slice(1).replaceAll("-", "");
                  return (
                    <div
                      key={theme}
                      className={`text-sm py-[6px] px-5 text-[#cccccc] capitalize hover:bg-[#1f1f1f] cursor-pointer ${
                        theme === codeThemeTransform && "bg-sky-700"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCodeTheme(
                          () => (e.target as HTMLDivElement).innerText
                        );
                      }}
                    >
                      {theme}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-[12px] pl-[22px] pr-4 pt-2 pb-2 text-white flex items-center justify-between">
          <span>EXPLORER</span>
          <VscEllipsis size={18} />
        </h2>
        <section>
          <header className="flex items-center py-[2px]">
            <span className="px-[3px]">
              <VscChevronDown />
            </span>
            <span className="text-[12px] font-semibold">
              GUILLERMO RAMOS VEGA
            </span>
          </header>
          <section className="h-[calc(100vh-161px)] overflow-y-auto">
            <div>
              {files.map((file) => {
                return (
                  <React.Fragment key={file.name}>
                    <div
                      className={`flex items-center gap-1 py-[2px] pl-5 hover:bg-[#1f1f1f] cursor-pointer ${
                        file.isActive && file.type !== "folder" && "bg-sky-700"
                      }`}
                      onClick={() => setOPenFile(file.name)}
                    >
                      {file.type === "folder" && <VscChevronDown size={14} />}
                      <span className="text-[13px] flex items-center gap-1">
                        {fileIcons(14)[file.type as keyof typeof fileIcons]}
                        {file.name}
                      </span>
                    </div>
                    {file.type === "folder" && file.files?.length && (
                      <>
                        {file.files.map((fileChild) => {
                          return (
                            <div
                              key={fileChild.name}
                              className={`flex items-center gap-1 pl-12 py-[2px] hover:bg-[#1f1f1f] cursor-pointer ${
                                fileChild.isActive &&
                                fileChild.type !== "folder" &&
                                "bg-sky-700"
                              }`}
                              onClick={() => setOPenFile(fileChild.name, file)}
                            >
                              {fileChild.type === "folder" && (
                                <VscChevronDown />
                              )}
                              <span className="text-[13px] flex items-center gap-1">
                                {
                                  fileIcons(14)[
                                    fileChild.type as keyof typeof fileIcons
                                  ]
                                }
                                {fileChild.name}
                              </span>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </React.Fragment>
                );
              })}
              <div
                className={`flex items-center gap-1 pl-5 py-[2px] hover:bg-[#1f1f1f] cursor-pointer`}
                onClick={() => openCvPdfEn()}
              >
                <span className="text-[13px] flex items-center gap-1">
                  <VscFilePdf />
                  GuillemroRamos_CV_En.pdf
                </span>
              </div>
              <div
                className={`flex items-center gap-1 pl-5 py-[2px] hover:bg-[#1f1f1f] cursor-pointer`}
                onClick={() => openCvPdfEs()}
              >
                <span className="text-[13px] flex items-center gap-1">
                  <VscFilePdf />
                  GuillemroRamos_CV_En.pdf
                </span>
              </div>
            </div>
          </section>
        </section>
        <section className="borderColor border-t border-b border-solid">
          <header className="flex items-center py-[2px]">
            <span className="px-[3px]">
              <VscChevronRight />
            </span>
            <span className="text-[12px] font-semibold">OUTLINE</span>
          </header>
        </section>
        <section className="borderColor border-b border-solid">
          <header className="flex items-center py-[2px]">
            <span className="px-[3px]">
              <VscChevronRight />
            </span>
            <span className="text-[12px] font-semibold">TIMELINE</span>
          </header>
        </section>
      </div>
    </aside>
  );
}
