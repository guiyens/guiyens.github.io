"use client";

import { useState } from "react";
import CodeViewer from "./components/CodeViewer";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import useFiles, { ProjectFile } from "./hooks/useFiles";

export default function Home() {
  const { files, setOPenFile, closeFile } = useFiles();
  const [codeTheme, setCodeTheme] = useState<string>("srcery");

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
      <TopBar />
      <section className="flex flex-row overflow-hidden h-[calc(100vh-58px)]">
        <Sidebar
          files={files}
          setOPenFile={setOPenFile}
          setCodeTheme={setCodeTheme}
          codeThemeSelected={codeTheme}
        />
        <section className="w-[calc(100vw-350px)]">
          <Tabs files={files} setOPenFile={setOPenFile} closeFile={closeFile} />
          <CodeViewer
            code={elementActive?.content || ""}
            language={elementActive?.languaje || ""}
            codeTheme={codeTheme}
          />
        </section>
      </section>
      <Footer />
    </main>
  );
}
