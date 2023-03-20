import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
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
          <Button color="dark" size="sm" variant="outlined" className="hidden lg:inline-flex lg:items-center mr-2">
            <svg className="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.5 1.5C2.84314 1.5 1.5 2.84314 1.5 4.5C1.5 6.15682 2.84314 7.5 4.5 7.5C6.15682 7.5 7.5 6.15682 7.5 4.5C7.5 2.84314 6.15682 1.5 4.5 1.5ZM0 4.5C0 2.01472 2.01472 0 4.5 0C6.98527 0 9 2.01472 9 4.5C9 5.47187 8.6919 6.37177 8.16802 7.10737L11.7803 10.7197C12.0732 11.0125 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0125 12.0732 10.7197 11.7803L7.10737 8.16802C6.37177 8.6919 5.47187 9 4.5 9C2.01472 9 0 6.98527 0 4.5Z" fill="white"/>
            </svg>
            Search
          </Button>
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