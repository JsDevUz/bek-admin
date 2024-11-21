import { useState } from "react";
import { navbatRouteData } from "../../routes/navbatRouteData";
import NavItem from "./NavItem";
import NavMiniItem from "./NavMini";
import { FaAngleLeft } from "react-icons/fa6";
interface NavBarProps {
  isOpen: boolean;
}
interface CurrentRouteProps {
  icon: JSX.Element;
  label: string;
  href: string;
  children: { label: string; active: string; id: string; href: string }[];
}
function NavbarDrower({ isOpen }: NavBarProps) {
  const [currentRoute, setCurrentRoute] = useState<CurrentRouteProps | null>();
  const [hover, setHover] = useState("");

  return (
    <div className="group/hidden">
      <div className="flex items-center my-[20px]">
        <img
          className=" mx-[30px] w-[30px] h-[30px] rounded-[10px]"
          src="https://play-lh.googleusercontent.com/WWLU52ZTL3yot0UiGn6KL2DqgKnWrsM5uc6pyXTUhvVQIOalAcEIr71ztWhrK3sk3fY=w240-h480-rw"
        />
        {isOpen && (
          <span className="text-[20px] dark:text-white text-black ml-[10px]">
            BEK-ADMIN
          </span>
        )}
      </div>
      {/* <div></div>
        <div></div> */}
      {!isOpen && (
        <ul className="">
          <div>
            {navbatRouteData.map((item, index) => (
              <NavMiniItem
                isActive={`/${location.pathname.split("/")[1]}` === item?.href}
                item={item}
                key={index}
                setHover={setHover}
                hover={hover}
                // classes={classes}
                handleClickNavItems={setCurrentRoute}
              />
            ))}
          </div>
        </ul>
      )}
      {isOpen && !currentRoute && (
        <ul className="">
          <div>
            {navbatRouteData?.map((item, index) => (
              <NavItem
                isActive={`/${location.pathname.split("/")[1]}` === item?.href}
                item={item}
                key={index}
                setHover={setHover}
                hover={hover}
                // classes={classes}
                isOpen={isOpen}
                handleClickNavItems={setCurrentRoute}
              />
            ))}
          </div>
        </ul>
      )}
      {isOpen && currentRoute && (
        <ul className="">
          <div
            className="flex text-gray-600 items-center pl-[30px]"
            onClick={() => setCurrentRoute(null)}
          >
            <FaAngleLeft
              className="text-gray-600 mr-[10px] dark:text-white"
              size={20}
            />
            {currentRoute?.icon}
            <span className="ml-[10px]  text-[20px] font-bold  group-hover/big:text-white text-black dark:text-white">
              {currentRoute?.label}
            </span>
          </div>
          <div>
            {currentRoute?.children?.map((item, index) => (
              <NavItem
                isActive={`/${location.pathname.split("/")[1]}` === item?.href}
                item={item}
                key={index}
                setHover={setHover}
                hover={hover}
                isOpen={isOpen}
                // classes={classes}
                handleClickNavItems={setCurrentRoute}
              />
            ))}
          </div>
        </ul>
      )}
      {!isOpen && currentRoute && (
        <div className="hidden min-h-[300px] pt-[10px] group-hover/hidden:block border-l-[35px] border-l-transparent fixed z-10  top-[80px] left-[80px]  ">
          <ul className=" z-10 dark:bg-[#1d2533] shadow-xl  bg-white rounded-[10px] py-[20px]">
            <div
              className="flex text-gray-600 items-center pl-[30px]"
              onClick={() => setCurrentRoute(null)}
            >
              {currentRoute?.icon}
              <span className="ml-[10px]  text-[20px]  group-hover/big:text-white dark:text-white text-black">
                {currentRoute?.label}
              </span>
            </div>
            <div>
              {currentRoute?.children?.map((item, index) => (
                <NavItem
                  isActive={
                    `/${location.pathname.split("/")[1]}` === item?.href
                  }
                  item={item}
                  key={index}
                  setHover={setHover}
                  hover={hover}
                  isOpen={isOpen}
                  handleClickNavItems={setCurrentRoute}
                />
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarDrower;
