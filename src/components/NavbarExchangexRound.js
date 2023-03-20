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
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 -mr-32 !bg-[#17191A] py-3 px-4 rounded-full">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal text-blue relative"
      >
        <a href="#" className="flex items-center">
          Swap
        </a>
        <div className="absolute w-1 h-1 rounded-full bg-blue text-center mt-1 left-0 right-0 mx-auto"></div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Liquidity
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Farms
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Metastaking
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Metabonding
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          <i className="fas fa-ellipsis-h"></i>
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar color="dark" className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <a href="#">
          <img className="w-32" src="./logo-exchange.svg" />
        </a>
        <div className="hidden lg:block">{navList}</div>
        <div>
          <Button color="dark" size="sm" variant="outlined" className="hidden lg:inline-flex lg:items-center border border-blue mr-2">
            <svg className="mr-2" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.5235 5.64697L12.3178 11.234H9.27832L13.5235 5.64697Z" fill="url(#paint0_linear_1_57)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M16.9409 11.2341L14.722 14.1777H7.05859L9.27784 11.2341H16.9409Z" fill="#1A45C2"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.7217 14.1775L10.4766 19.7646L11.6822 14.1775L14.7217 14.1775Z" fill="url(#paint1_linear_1_57)"/>
              <defs>
                <linearGradient id="paint0_linear_1_57" x1="9.27832" y1="5.64697" x2="9.27832" y2="11.234" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1A45C2"/>
                  <stop offset="1" stopColor="#001F9C"/>
                </linearGradient>
                <linearGradient id="paint1_linear_1_57" x1="13.6222" y1="16.9208" x2="13.6222" y2="14.2278" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1A45C2"/>
                  <stop offset="1" stopColor="#001F9C"/>
                </linearGradient>
              </defs>
            </svg>
            $0.000010
          </Button>
          <Button size="sm" className="hidden lg:inline-flex">
            <img className="w-4 mr-1" src="./icon-connect-white.png" />
            <span>Connect</span>
          </Button>
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