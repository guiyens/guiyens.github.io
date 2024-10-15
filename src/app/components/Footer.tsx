import {
  VscFold,
  VscGitMerge,
  VscWarning,
  VscBug,
  VscJson,
  VscCheckAll,
  VscBell,
} from "react-icons/vsc";
import { TfiReload } from "react-icons/tfi";
import {
  IoIosCloseCircleOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";

export default function Footer(props: { screenWidth: number }) {
  const { screenWidth } = props;
  return (
    <footer className="borderColor border-t border-solid h-5 flex w-screen">
      <div className="w-1/2 flex items-top gap-4">
        <div className="px-2 py-[3px] bg-sky-700">
          <VscFold size={14} />
        </div>
        <div className="flex items-center gap-2">
          <VscGitMerge size={12} />
          <span className="text-sm block">main</span>
          <TfiReload size={11} />
        </div>

        {screenWidth > 768 && (
          <>
            <div className="flex items-center gap-1">
              <IoIosCloseCircleOutline size={14} />
              <span className="text-sm block">0</span>
              <VscWarning size={13} />
              <span className="text-sm block">3</span>
            </div>

            <div className="flex items-center gap-1">
              <IoIosCloseCircleOutline size={14} />
              <span className="text-sm block">0</span>
            </div>
            <div className="flex items-center gap-1">
              <VscBug size={14} />
              <IoIosInformationCircleOutline size={14} />
            </div>
          </>
        )}
      </div>
      <div className="w-1/2 flex items-top gap-5 justify-end pr-3">
        {screenWidth > 768 && (
          <>
            <div className="flex items-center gap-1">
              <span className="text-xs block">Lin. 48, col.55</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs block">UTF-8</span>
            </div>
          </>
        )}
        <div className="flex items-center gap-1">
          <VscJson size={14} />
          <span className="text-xs block">TypeScript</span>
        </div>

        <div className="flex items-center gap-1">
          <VscWarning size={14} />
          <span className="text-xs block">TSLint</span>
        </div>
        <div className="flex items-center gap-1">
          <VscCheckAll size={14} />
          <span className="text-xs block">Prettier</span>
        </div>
        <div className="flex items-center gap-1">
          <VscBell size={14} />
        </div>
      </div>
    </footer>
  );
}
