import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  isActive: boolean;
  item: {
    label: string;
    href: string;
    icon?: React.ReactElement; // Optional
    children?: { label: string; active: string; id: string; href: string }[]; // Optional
  };
  handleClickNavItems: Function;
  setHover: Function;
  hover?: string;
  isOpen: Boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  isActive,
  item,
  handleClickNavItems,
  setHover,
}) => {
  const handleClick = () => item?.children?.length && handleClickNavItems(item);
  return (
    <Link
      to={item?.href}
      onClick={(e) => item?.children?.length && e.preventDefault()}
    >
      <div
        className="group/big flex flex-row my-[4px] min-w-[300px] "
        onClick={handleClick}
        onMouseOver={() => setHover(item.label)}
        style={{ fontWeight: isActive ? "bold" : "normal" }}
      >
        <span className="w-[6px]  mr-[10px] shrink-0  group-hover/big:bg-blue-600 rounded-r-[5px]"></span>

        <div className="rounded-[8px] w-[100%] p-[15px]  group-hover/big:bg-blue-600  mr-[10px]  align-middle items-center  flex">
          {item?.icon}
          <span className="ml-[10px]  text-[20px]  group-hover/big:text-white text-black dark:text-white">
            {item.label}
          </span>
        </div>
      </div>
    </Link>
  );
};
export default NavItem;
