import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
 
export default function Example() {
  return (
    <Card color="dark" className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} className="shadow-none">
        <img src="./sense4fit.png" alt="ui/ux review check" />
      </CardHeader>
      <div className="ml-6 -mt-6 z-50">
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="27"
            cy="27"
            r="24"
            fill="#D8D8D8"
            stroke="#151515"
            stroke-width="6"
          />
          <mask
            id="mask0_0_644"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="54"
            height="54"
          >
            <circle
              cx="27"
              cy="27"
              r="24"
              fill="white"
              stroke="white"
              stroke-width="6"
            />
          </mask>
          <g mask="url(#mask0_0_644)">
            <path
              d="M27 50C40.2549 50 51 39.2549 51 26C51 12.7452 40.2549 2 27 2C13.7452 2 3 12.7452 3 26C3 39.2549 13.7452 50 27 50Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.8451 16.5186L24.3805 18.9723L16.9763 26.3748C16.9539 26.3972 16.9413 26.4278 16.9413 26.4595C16.9413 26.4913 16.9539 26.5217 16.9764 26.5441L22.4173 31.9782C22.464 32.0249 22.5397 32.0249 22.5864 31.9782L30.6051 23.95L33.0491 26.4004L23.072 36.3736C22.8163 36.6291 22.4029 36.6329 22.1427 36.3819C20.2778 34.584 14.2337 28.7567 12.3357 26.9268C12.2073 26.803 12.1342 26.6327 12.1329 26.4543C12.1315 26.2759 12.202 26.1046 12.3285 25.9788L21.8451 16.5186ZM22.2728 16.0935L26.9413 11.4525C27.2003 11.1951 27.6186 11.1954 27.8771 11.4531C28.5365 12.11 29.5885 13.1582 29.8927 13.4613L24.8069 18.546L22.2728 16.0935Z"
              fill="url(#paint0_linear_0_644)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.2323 35.343L29.697 32.8893L37.1011 25.4867C37.1235 25.4643 37.1362 25.4338 37.1362 25.4021C37.1362 25.3702 37.1235 25.3398 37.101 25.3174L31.6602 19.8834C31.6134 19.8366 31.5376 19.8366 31.4909 19.8834L23.4723 27.9115L21.0283 25.4611L31.0054 15.488C31.2611 15.2324 31.6744 15.2287 31.9347 15.4796C33.7997 17.2776 39.8437 23.1048 41.7416 24.9347C41.8701 25.0586 41.9432 25.2288 41.9445 25.4072C41.9459 25.5856 41.8754 25.757 41.749 25.8827L32.2323 35.343ZM31.8046 35.7682L27.136 40.409C26.8771 40.6664 26.4589 40.6662 26.2002 40.4085C25.541 39.7515 24.489 38.7034 24.1846 38.4003L29.2706 33.3155L31.8046 35.7682Z"
              fill="url(#paint1_linear_0_644)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_0_644"
              x1="14.0749"
              y1="26.9818"
              x2="30.6658"
              y2="38.3993"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D91FB" />
              <stop offset="0.38" stop-color="#124BFD" />
              <stop offset="0.5" stop-color="#4030FB" />
              <stop offset="0.69" stop-color="#4A2AFA" />
              <stop offset="1" stop-color="#7211F7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_644"
              x1="14.7732"
              y1="25.8225"
              x2="30.5857"
              y2="37.9361"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D91FB" />
              <stop offset="0.38" stop-color="#124BFD" />
              <stop offset="0.5" stop-color="#4030FB" />
              <stop offset="0.69" stop-color="#4A2AFA" />
              <stop offset="1" stop-color="#7211F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <CardBody className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="white" className="font-medium">
            Sense4FIT
          </Typography>
          <Chip className="rounded-full" color="green" value="Live" />
        </div>
        <Typography color="white" className="opacity-70 font-normal">
          Sense4FIT is a Web3 Fit2Earn Lifestyle ecosystem with game-fi elements
          that has the goal of helping people to become better versions of
          themselves and get rewarded while achieving their goals.
        </Typography>
        <div className="group mt-4 flex items-center">
          <a href="#">
            <span className="text-white opacity-70">Read more</span>
          </a>
          <div className="flex gap-3 ml-auto">
            <Tooltip content={`65" HDTV`}>
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                <i className="fas fa-globe text-white p-3"></i>
              </span>
            </Tooltip>
            <Tooltip content="Fire alert">
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                <i className="fab fa-twitter text-white p-3"></i>
              </span>
            </Tooltip>
            <Tooltip content="And +20 more">
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                <i className="fas fa-file-pdf text-white p-3"></i>
              </span>
            </Tooltip>
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex p-4 pt-0">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#D8D8D8" />
          <mask
            id="mask0_0_658"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <circle cx="18" cy="18" r="18" fill="white" />
          </mask>
          <g mask="url(#mask0_0_658)">
            <path
              d="M18 36C27.9412 36 36 27.9412 36 18C36 8.05888 27.9412 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9412 8.05888 36 18 36Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.1338 10.889L16.0354 12.7292L10.4823 18.2811C10.4654 18.2979 10.456 18.3209 10.456 18.3446C10.456 18.3685 10.4654 18.3913 10.4823 18.4081L14.563 22.4837C14.598 22.5187 14.6548 22.5187 14.6898 22.4837L20.7038 16.4625L22.5368 18.3003L15.054 25.7802C14.8622 25.9718 14.5522 25.9747 14.357 25.7864C12.9583 24.438 8.42526 20.0676 7.00181 18.6951C6.90551 18.6023 6.85066 18.4746 6.84964 18.3408C6.84862 18.207 6.90151 18.0785 6.99639 17.9841L14.1338 10.889ZM14.4546 10.5701L17.956 7.08943C18.1502 6.89638 18.4639 6.89656 18.6578 7.08984C19.1524 7.5825 19.9414 8.3687 20.1695 8.596L16.3552 12.4095L14.4546 10.5701Z"
              fill="url(#paint0_linear_0_658)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.9235 25.0073L20.022 23.1669L25.5751 17.615C25.5919 17.5982 25.6014 17.5753 25.6014 17.5515C25.6014 17.5276 25.5919 17.5048 25.575 17.488L21.4944 13.4125C21.4594 13.3774 21.4025 13.3774 21.3674 13.4125L15.3535 19.4336L13.5205 17.5958L21.0034 10.116C21.1951 9.92428 21.5051 9.92146 21.7003 10.1097C23.099 11.4582 27.632 15.8286 29.0555 17.201C29.1518 17.2939 29.2067 17.4216 29.2076 17.5554C29.2087 17.6892 29.1558 17.8177 29.061 17.912L21.9235 25.0073ZM21.6028 25.3261L18.1013 28.8067C17.9071 28.9998 17.5934 28.9997 17.3994 28.8063C16.905 28.3136 16.116 27.5275 15.8877 27.3002L19.7022 23.4866L21.6028 25.3261Z"
              fill="url(#paint1_linear_0_658)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_0_658"
              x1="8.30618"
              y1="18.7363"
              x2="20.7493"
              y2="27.2995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D91FB" />
              <stop offset="0.38" stop-color="#124BFD" />
              <stop offset="0.5" stop-color="#4030FB" />
              <stop offset="0.69" stop-color="#4A2AFA" />
              <stop offset="1" stop-color="#7211F7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_658"
              x1="8.82917"
              y1="17.8668"
              x2="20.6886"
              y2="26.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D91FB" />
              <stop offset="0.38" stop-color="#124BFD" />
              <stop offset="0.5" stop-color="#4030FB" />
              <stop offset="0.69" stop-color="#4A2AFA" />
              <stop offset="1" stop-color="#7211F7" />
            </linearGradient>
          </defs>
        </svg>

        <Button className="ml-auto" color="dark" size="sm">
          Swap on Exchange
        </Button>
      </CardFooter>
    </Card>
  );
}