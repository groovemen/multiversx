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
 
  return (
    <Navbar color="dark" className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <a href="#">
          <img className="w-36" src="./logo-xlaunchpad.svg" alt="logo" />
        </a>
        <div>
          <Button size="sm" color="dark" variant="outlined">
            <div className="flex">
              <svg className="mr-2" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5303 3.03125C11.6761 2.88542 11.749 2.70833 11.749 2.5C11.749 2.29167 11.6761 2.11458 11.5303 1.96875C11.3844 1.82292 11.2074 1.75 10.999 1.75C10.7907 1.75 10.6136 1.82292 10.4678 1.96875C10.3219 2.11458 10.249 2.29167 10.249 2.5C10.249 2.70833 10.3219 2.88542 10.4678 3.03125C10.6136 3.17708 10.7907 3.25 10.999 3.25C11.2074 3.25 11.3844 3.17708 11.5303 3.03125ZM13.499 0.249999C13.499 1.54687 13.3011 2.66927 12.9053 3.61719C12.5146 4.5599 11.8558 5.4974 10.9287 6.42969C10.5068 6.84635 9.99902 7.30469 9.40527 7.80469L9.24902 10.7656C9.23861 10.849 9.19694 10.9167 9.12402 10.9687L6.12402 12.7188C6.08757 12.7396 6.0459 12.75 5.99902 12.75C5.93652 12.75 5.87663 12.7266 5.81934 12.6797L5.31934 12.1797C5.25163 12.1068 5.23079 12.0234 5.25684 11.9297L5.9209 9.77344L3.72559 7.57812L1.56934 8.24219C1.55371 8.2474 1.53027 8.25 1.49902 8.25C1.42611 8.25 1.36621 8.22656 1.31934 8.17969L0.819336 7.67969C0.730794 7.58073 0.717773 7.47917 0.780273 7.375L2.53027 4.375C2.58236 4.30208 2.65007 4.26042 2.7334 4.25L5.69434 4.09375C6.19434 3.5 6.65267 2.99219 7.06934 2.57031C8.0485 1.59635 8.98079 0.924479 9.86621 0.554687C10.7516 0.184895 11.874 -5.96046e-07 13.2334 -5.96046e-07C13.3063 -5.96046e-07 13.3688 0.0260411 13.4209 0.0781245C13.473 0.125 13.499 0.182291 13.499 0.249999Z" fill="white"/>
              </svg>
              Startups Apply
            </div>
          </Button>
          <Button color="red" size="sm" className="hidden lg:inline-flex ml-2">
            <img className="w-4 mr-1" src="./icon-connect-white.png" alt="connect" />
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
          <Button color="cyan" size="sm" fullWidth className="mb-2">
            <span>Buy</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}