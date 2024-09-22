import React from "react";
import { MenuItem } from "@material-tailwind/react";
import {
  BoltIcon,
  AdjustmentsHorizontalIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import ManualMenu from "./ManualMenu";
import { NavLink } from "react-router-dom";

const navListItems = [
  {
    label: "Sensor",
    to: "Sensor",
    icon: BoltIcon,
  },
  {
    label: "Control",
    to: "Control",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    label: "Announcement",
    to: "Announcement",
    icon: BellAlertIcon,
  },
];

export default function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <ManualMenu />
      {navListItems.map(({ label, to, icon }) => (
        <li key={label}>
          <NavLink to={to} className="text-gray-900">
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              <span className="text-gray-900"> {label}</span>
            </MenuItem>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
