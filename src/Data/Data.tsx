import {
  UilEstate,
  UilClipboardNotes,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardNotes,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
  },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0 10px 20px 0 #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        Name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
      boxShadow: "0 10px 20px 0 #fdc0c7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        Name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(180deg, rgb(248, 212, 154) 0%, rgb(255, 202, 113) 100%)",
      boxShadow: "0 10px 20px 0 #f9d59b",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardNotes,
    series: [
      {
        Name: "Expenses",
        data: [10, 20, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mAh battery.",
    time: "25 seconds ago",
    id: 1,
  },
  {
    img: img2,
    name: "Todd Richards",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
    id: 2,
  },
  {
    img: img3,
    name: "Claudia Marshall",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
    id: 3,
  },
];
