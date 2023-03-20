import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input
} from "@material-tailwind/react";
 
export default function Example() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 -mr-28">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-cyan"
      >
        <a href="#" className="flex items-center">
          Develop
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Validate
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Integrate
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Learn
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar color="dark" className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <a href="#">
          <img className="w-36" src="./logo-multiversxdocs.svg" />
        </a>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex gap-4 items-center text-sm">
          <a href="#">
            <i className="fab fa-github-alt text-white"></i>
          </a>
          <a href="#">
            <i className="fab fa-discord text-white"></i>
          </a>
          <a href="#">
            <i className="fas fa-paper-plane text-white"></i>
          </a>
        
          <Input color="dark" className="!py-2" label="Search" />

          <a href="#">
            <i className="fas fa-clone text-white"></i>
          </a>
        </div>
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