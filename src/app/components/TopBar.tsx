import {
  VscArrowSmallLeft,
  VscArrowSmallRight,
  VscLayoutSidebarRight,
  VscLayoutPanelOff,
  VscLayoutSidebarLeftOff,
  VscLayout,
  VscSearch,
} from "react-icons/vsc";

export default function TopBar() {
  return (
    <section className="borderColor border-b border-solid h-9 flex w-screen">
      <div className="flex w-[90%] justify-center items-center pl-24">
        <VscArrowSmallLeft size={28} />
        <VscArrowSmallRight size={28} />
        <p className="flex ml-3 borderColor border border-solid rounded-md text-sm w-[500px] bg-[#1f1f1f] py-[1px] items-center gap-1 justify-center">
          <VscSearch />
          Guillermo Ramos Vega
        </p>
      </div>
      <div className="flex justify-end grow gap-2 items-center pr-2">
        <VscLayoutSidebarRight size={17} />
        <VscLayoutPanelOff size={17} />
        <VscLayoutSidebarLeftOff size={17} />
        <VscLayout size={17} />
      </div>
    </section>
  );
}
