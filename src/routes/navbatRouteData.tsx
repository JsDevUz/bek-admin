// @ts-ignore
import { CiShoppingTag } from "react-icons/ci";
// @ts-ignore
import MarketingIcon from "../assets/icons/VendorsIcon";
// @ts-ignore
import OrdersIcon from "../assets/icons/VendorsIcon";
// @ts-ignore
import ProductsIcon from "../assets/icons/VendorsIcon";
// @ts-ignore
import ReportsIcon from "../assets/icons/VendorsIcon";
// @ts-ignore
import SettingsIcon from "../assets/icons/VendorsIcon";
// @ts-ignore
import UsersIcon from "../assets/icons/VendorsIcon";
// @ts-ignore
import VendorsIcon from "../assets/icons/VendorsIcon";
import {
  FaHouseChimney,
  FaInbox,
  FaStore,
  FaTag,
  FaUser,
} from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";

export const navbatRouteData = [
  {
    label: "Store",
    id: "2",
    icon: (
      <FaStore
        size={20}
        className="text-gray-600 dark:text-white group-hover:text-blue-600 group-hover/big:text-white"
      />
    ),
    href: "/shops",
    children: [
      {
        label: "All stores",
        active: "/shops/*",
        id: "2.1",
        href: "/shops",
      },
      {
        label: "Sellers",
        active: "/shops/vendors/*",
        id: "2.2",
        href: "/shops/vendors",
      },
    ],
  },
  {
    label: "Products",
    id: "3",
    icon: (
      <FaTag
        size={20}
        className="text-gray-600 dark:text-white group-hover:text-blue-600 group-hover/big:text-white"
      />
    ),
    href: "/products",
    children: [
      {
        label: "All products",
        active: "/products/*",
        id: "3.1",
        href: "/products/all",
      },
      {
        label: "Add product",
        active: "/products/*",
        id: "3.1",
        href: "/products/add",
      },
      {
        label: "Product reviews",
        active: "/products/reviews/*",
        id: "3.2",
        href: "/products/reviews",
      },
    ],
  },
  {
    label: "Orders",
    id: "5",
    icon: (
      <FaInbox
        size={20}
        className="text-gray-600 dark:text-white group-hover:text-blue-600 group-hover/big:text-white"
      />
    ),
    href: "/orders",
    children: [
      {
        label: "All orders",
        active: "/orders*",
        id: "5.1",
        href: "/orders/all",
      },

      {
        label: "Transactions",
        active: "/orders/order-transactions/*",
        id: "5.2",
        href: "/orders/order-transactions",
      },
    ],
  },
  {
    label: "Clients",
    id: "1",
    icon: (
      <FaUser
        size={20}
        className="text-gray-600 dark:text-white group-hover:text-blue-600 group-hover/big:text-white"
      />
    ),
    href: "/users",
    children: [
      {
        label: "All clients",
        active: "/clients/all/*",
        id: "1.1",
        href: "/clients/all",
      },
    ],
  },

  {
    label: "Settings",
    id: "9",
    icon: (
      <AiFillSetting
        size={20}
        className="text-gray-600 dark:text-white group-hover:text-blue-600 group-hover/big:text-white"
      />
    ),
    href: "/settings",
    children: [
      {
        label: "Profile",
        active: "/settings/profile/*",
        id: "9.6",
        href: "/settings/profile",
      },
      {
        label: "Banner",
        active: "/settings/banners/*",
        id: "9.1",
        href: "/settings/banners",
      },

      {
        label: "Categories",
        active: "/settings/categories/*",
        id: "9.2",
        href: "/settings/categories",
      },
      {
        label: "Roles",
        active: "/settings/roles/*",
        id: "9.3",
        href: "/settings/roles",
      },
      {
        label: "Hashtags",
        active: "/settings/hashtags/*",
        id: "9.4",
        href: "/settings/hashtags",
      },
      {
        label: "Users",
        active: "/settings/users/*",
        id: "9.5",
        href: "/settings/users",
      },
    ],
  },
];
