import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
 
import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        // color="white"
        className="p-1 font-normal text-cyan"
      >
        <a href="#" className="flex items-center">
          Technology
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Build
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Transformation
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
        <Menu>
          <MenuHandler>
            <div>
              Resources
              <i className="fas fa-chevron-down text-xs ml-2"></i>
            </div>
          </MenuHandler>
          <MenuList>
            <MenuItem className="flex items-center gap-2">
              <Typography variant="small" className="font-normal">
                My Profile
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <Typography variant="small" className="font-normal">
                Edit Profile
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <Typography variant="small" className="font-normal">
                Inbox
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <Typography variant="small" className="font-normal">
                Help
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <div className="flex">
          <span className="mr-2 mb-1">=</span>
          <a href="#" className="flex items-center">
          More
          </a>
        </div>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar color="dark" className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <a href="#">
          <img className="w-28" src="./logo-multiversx.svg" />
        </a>
        <div className="hidden lg:block">{navList}</div>
        <Button color="cyan" size="sm" className="hidden lg:inline-block">
          <span>Buy</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button color="cyan" size="sm" fullWidth className="mb-2">
            <span>Buy</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}