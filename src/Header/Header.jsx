import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import NavList from "./NavList";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  return (
    <Navbar className="mt-4 px-4 py-3 lg:rounded-xl">
      <div className="relative mx-auto flex items-center justify-between text-gray-900">
        <span className="ml-2 mr-4 cursor-pointer py-1.5 font-medium">SDS</span>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="size-6" />
        </IconButton>

        <Button size="sm" variant="text">
          <span>Log In</span>
        </Button>
        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}

//////////////////////////////////////////
//////////    Nav List
