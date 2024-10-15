"use client";

import { useState } from "react";
import CodeViewer from "./components/CodeViewer";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import useFiles, { ProjectFile } from "./hooks/useFiles";

// const Sidebar = dynamic(() => import("./components/Sidebar"), {
//   ssr: false,
// });

export default function Home() {
  const { files, setOPenFile, closeFile } = useFiles();
  const [codeTheme, setCodeTheme] = useState<string>("srcery");
  const [isPanelSettingsActive, setIsPanelSettingsActive] =
    useState<boolean>(false);
  const [dimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [isMenuDisplayed, setIsMenuDisplayed] = useState<boolean>(
    dimensions ? dimensions.width > 768 : true
  );

  const elementActive = files
    .reduce((acumulator: ProjectFile[], obj: ProjectFile) => {
      if (obj.type === "folder") {
        acumulator = acumulator.concat(obj.files!);
      } else {
        acumulator.push(obj);
      }
      return acumulator;
    }, [])
    .find((file) => file.isActive);

  return (
    <main>
      <TopBar screenWidth={dimensions.width} />
      <section className="flex flex-row overflow-hidden h-[calc(100vh-58px)]">
        <Sidebar
          files={files}
          setOPenFile={setOPenFile}
          setCodeTheme={setCodeTheme}
          codeThemeSelected={codeTheme}
          isPanelSettingsActive={isPanelSettingsActive}
          setIsPanelSettingsActive={setIsPanelSettingsActive}
          isMenuDisplayed={isMenuDisplayed}
          setIsMenuDisplayed={setIsMenuDisplayed}
          dimensions={dimensions}
        />
        <section
          className={`transition-all duration-1000 ${
            isMenuDisplayed ? "w-[calc(100%-350px)]" : "w-[calc(100%-47px)]"
          }`}
        >
          <Tabs files={files} setOPenFile={setOPenFile} closeFile={closeFile} />
          <CodeViewer
            code={elementActive?.content || ""}
            language={elementActive?.languaje || ""}
            codeTheme={codeTheme}
          />
        </section>
      </section>
      <Footer screenWidth={dimensions.width} />
    </main>
  );
}
