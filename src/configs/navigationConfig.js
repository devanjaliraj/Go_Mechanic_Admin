import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Circle size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "Component",
  },
  {
    id: "driver",
    title: "Drivers",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    children: [
      {
        id: "approvalPendingDrivers",
        title: "Approval Pending Drivers",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/driver/approvalPendingDrivers",
      },
      {
        id: "approvedDrivers",
        title: "Approved Drivers",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/driver/approvedDrivers",
      },
      {
        id: "driverRatings",
        title: "Driver Ratings",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/driver/driverRatings",
      },
      {
        id: "negativeBalanceDrivers",
        title: "Negative Balance Drivers",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/driver/negativeBalanceDrivers",
      },
      {
        id: "withdrawalRequests",
        title: "Withdrawal Requests",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/driver/withdrawalRequests",
      },
    ],
  },
  {
    id: "userride",
    title: "User",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "userRideList",
        title: "user List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/userride/userRideList",
      },
    ],
  },

  {
    id: "vehicle",
    title: "Vehicle",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "vehicleTypes",
        title: "Vehicle Types List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/vehicle/vehicleTypes",
      },
      {
        id: "vehicleModel",
        title: "Vehicle Model ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/vehicle/vehicleModel",
      },
    ],
  },

  {
    id: "notificationList",
    title: "Custom Notification",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/notification/notificationList",
  },

  //     {
  //       id: "membership",
  //       title: "Membership",
  //       type: "collapse",
  //       icon: <Icon.User size={20} />,
  //       children: [
  //     {
  //       id: "membershipList",
  //       title: "Membership List ",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/membership/membershipList",
  //     },
  //   ],
  // },
  {
    id: "aboutus",
    title: "About Us ",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/about/AllaboutUs",
  },
  {
    id: "helpUs",
    title: "Help Us",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/helpUs/HelpUs",
  },

  {
    id: "TermConditionList",
    title: "Term And Condition ",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/termscondition/TermConditionList",
  },
];
export default navigationConfig;
