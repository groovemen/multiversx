import { 
  Button, 
  IconButton 
} from "@material-tailwind/react";
 
export default function Example() {
  return (
    <>
    <div className="flex items-center gap-4 mb-4">
      <a href="#">
        <img className="w-32" src="./logo-multiversx.svg" />
      </a>
      <a href="#">
        <img className="w-28" src="./logo-xportal.svg" />
      </a>
      <a href="#">
        <img className="w-32" src="./logo-exchange.svg" />
      </a>
      <a href="#">
        <img className="w-32" src="./logo-xspotlight.svg" />
      </a>
      <a href="#">
        <img className="w-32" src="./logo-xlaunchpad.svg" />
      </a>
    </div>
    <div className="flex gap-4 mb-4">
      <Button color="cyan" className="mr-4">Buy EGDL</Button>
      <Button color="cyan" className="mr-4">Download</Button>
      <Button color="blue" className="mr-4">Read Now</Button>
      <Button color="yellow" className="mr-4">
        <div className="flex">
          <img className="w-4 mr-1" src="./icon-connect-black.png" />
          Connect
        </div>
      </Button>
      <Button color="red" className="mr-4">
        <div className="flex">
          <img className="w-4 mr-1" src="./icon-connect-white.png" />
          Connect
        </div>
      </Button>
    </div>
    <div className="flex gap-4 mb-4">
      <Button color="cyan" className="mr-4 rounded-full">Buy EGDL</Button>
      <Button color="cyan" className="mr-4 rounded-full">Download</Button>
      <Button color="blue" className="mr-4 rounded-full">Read Now</Button>
      <Button color="yellow" className="mr-4 rounded-full">
        <div className="flex">
          <img className="w-4 mr-1" src="./icon-connect-black.png" />
          Connect
        </div>
      </Button>
      <Button color="red" className="mr-4 rounded-full">
        <div className="flex">
          <img className="w-4 mr-1" src="./icon-connect-white.png" />
          Connect
        </div>
      </Button>
    </div>
    <div className="flex gap-4">
      <IconButton color="dark" variant="outlined">
        <i className="fas fa-arrow-right"></i>
      </IconButton>
 
      <Button color="dark">
        <img className="w-12" src="./apple.png" />
      </Button>
      <Button color="dark">Close</Button>
      <Button color="dark">
        Read more
        <i className="fas fa-chevron-right ml-2"></i>
      </Button>
      <Button color="dark">
        <div className="flex">
          <svg className="mr-2" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5303 3.03125C11.6761 2.88542 11.749 2.70833 11.749 2.5C11.749 2.29167 11.6761 2.11458 11.5303 1.96875C11.3844 1.82292 11.2074 1.75 10.999 1.75C10.7907 1.75 10.6136 1.82292 10.4678 1.96875C10.3219 2.11458 10.249 2.29167 10.249 2.5C10.249 2.70833 10.3219 2.88542 10.4678 3.03125C10.6136 3.17708 10.7907 3.25 10.999 3.25C11.2074 3.25 11.3844 3.17708 11.5303 3.03125ZM13.499 0.249999C13.499 1.54687 13.3011 2.66927 12.9053 3.61719C12.5146 4.5599 11.8558 5.4974 10.9287 6.42969C10.5068 6.84635 9.99902 7.30469 9.40527 7.80469L9.24902 10.7656C9.23861 10.849 9.19694 10.9167 9.12402 10.9687L6.12402 12.7188C6.08757 12.7396 6.0459 12.75 5.99902 12.75C5.93652 12.75 5.87663 12.7266 5.81934 12.6797L5.31934 12.1797C5.25163 12.1068 5.23079 12.0234 5.25684 11.9297L5.9209 9.77344L3.72559 7.57812L1.56934 8.24219C1.55371 8.2474 1.53027 8.25 1.49902 8.25C1.42611 8.25 1.36621 8.22656 1.31934 8.17969L0.819336 7.67969C0.730794 7.58073 0.717773 7.47917 0.780273 7.375L2.53027 4.375C2.58236 4.30208 2.65007 4.26042 2.7334 4.25L5.69434 4.09375C6.19434 3.5 6.65267 2.99219 7.06934 2.57031C8.0485 1.59635 8.98079 0.924479 9.86621 0.554687C10.7516 0.184895 11.874 -5.96046e-07 13.2334 -5.96046e-07C13.3063 -5.96046e-07 13.3688 0.0260411 13.4209 0.0781245C13.473 0.125 13.499 0.182291 13.499 0.249999Z" fill="white"/>
          </svg>
          Startups Apply
        </div>
      </Button>
    </div>
    <div className="flex gap-4 mt-4">
      <IconButton color="dark" className="rounded-full" variant="outlined">
        <i className="fas fa-arrow-right"></i>
      </IconButton>
 
      <Button color="dark" className="rounded-full">
        <img className="w-12" src="./apple.png" />
      </Button>
      <Button color="dark" className="rounded-full">Close</Button>
      <Button color="dark" className="rounded-full">
        Read more
        <i className="fas fa-chevron-right ml-2"></i>
      </Button>
      <Button color="dark" className="rounded-full">
        <div className="flex">
          <svg className="mr-2" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5303 3.03125C11.6761 2.88542 11.749 2.70833 11.749 2.5C11.749 2.29167 11.6761 2.11458 11.5303 1.96875C11.3844 1.82292 11.2074 1.75 10.999 1.75C10.7907 1.75 10.6136 1.82292 10.4678 1.96875C10.3219 2.11458 10.249 2.29167 10.249 2.5C10.249 2.70833 10.3219 2.88542 10.4678 3.03125C10.6136 3.17708 10.7907 3.25 10.999 3.25C11.2074 3.25 11.3844 3.17708 11.5303 3.03125ZM13.499 0.249999C13.499 1.54687 13.3011 2.66927 12.9053 3.61719C12.5146 4.5599 11.8558 5.4974 10.9287 6.42969C10.5068 6.84635 9.99902 7.30469 9.40527 7.80469L9.24902 10.7656C9.23861 10.849 9.19694 10.9167 9.12402 10.9687L6.12402 12.7188C6.08757 12.7396 6.0459 12.75 5.99902 12.75C5.93652 12.75 5.87663 12.7266 5.81934 12.6797L5.31934 12.1797C5.25163 12.1068 5.23079 12.0234 5.25684 11.9297L5.9209 9.77344L3.72559 7.57812L1.56934 8.24219C1.55371 8.2474 1.53027 8.25 1.49902 8.25C1.42611 8.25 1.36621 8.22656 1.31934 8.17969L0.819336 7.67969C0.730794 7.58073 0.717773 7.47917 0.780273 7.375L2.53027 4.375C2.58236 4.30208 2.65007 4.26042 2.7334 4.25L5.69434 4.09375C6.19434 3.5 6.65267 2.99219 7.06934 2.57031C8.0485 1.59635 8.98079 0.924479 9.86621 0.554687C10.7516 0.184895 11.874 -5.96046e-07 13.2334 -5.96046e-07C13.3063 -5.96046e-07 13.3688 0.0260411 13.4209 0.0781245C13.473 0.125 13.499 0.182291 13.499 0.249999Z" fill="white"/>
          </svg>
          Startups Apply
        </div>
      </Button>
    </div>
    </>
  );
}