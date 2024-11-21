import React from "react";

interface NavMiniItemProps {
  isActive: boolean;
  item: {
    label: string;
    href: string;
    icon: JSX.Element;
    children: { label: string; active: string; id: string; href: string }[];
  }; // Adjust based on the actual structure of `item`
  handleClickNavItems: Function;
  setHover: Function;
  hover: string;
}

const NavMiniItem: React.FC<NavMiniItemProps> = ({
  isActive,
  item,
  handleClickNavItems,
}) => {
  // const handleClick = () => item?.children?.length && handleClickNavItems(item);
  return (
    <div
      className="group flex flex-row my-[4px] "
      // onClick={handleClick}
      onMouseOver={(event) => {
        if (item.children?.length > 0) {
          event.preventDefault();
          handleClickNavItems(item);
        }
      }}
      style={{ fontWeight: isActive ? "bold" : "normal" }}
    >
      <span className="w-[6px] shrink-0  mr-[10px]  group-hover:bg-blue-600 rounded-r-[5px]"></span>

      <div className="rounded-[8px] w-[100%] p-[15px] h-[60px]    mr-[10px]  align-middle items-center  flex">
        {item?.icon}
      </div>
    </div>
  );
};
export default NavMiniItem;
