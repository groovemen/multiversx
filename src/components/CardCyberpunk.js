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
        <img src="./metaverse.png" alt="ui/ux review check" />
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
            id="mask0_0_599"
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
          <g mask="url(#mask0_0_599)">
            <circle cx="27" cy="27" r="24" fill="#E2343E" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.6972 39.4069L36.8291 31.1894C37.2356 30.7784 36.9484 30.0734 36.3738 30.0734H33.5715C33.4007 30.0734 33.2375 30.142 33.1163 30.2639L31.9729 31.4196C31.5663 31.8306 30.8724 31.5385 30.8724 30.9573V24.9719C30.8724 24.6112 31.1606 24.3181 31.5176 24.3181H37.1937C37.3645 24.3181 37.5287 24.3868 37.6499 24.5096L37.7358 24.5967C37.9877 24.852 37.9877 25.2659 37.7358 25.5202L37.6174 25.6402C37.2108 26.0521 37.4991 26.7552 38.0736 26.7552H40.9122C41.083 26.7552 41.2472 26.6866 41.3684 26.5637L42.4106 25.5077C42.6626 25.2523 42.6626 24.8384 42.4106 24.5841L39.0624 21.1915C38.9412 21.0687 38.7771 21 38.6062 21H28.2448C27.8888 21 27.5996 21.2921 27.5996 21.6538V38.9456C27.5996 39.5268 28.2935 39.8188 28.7001 39.4078L28.6972 39.4069Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.7998 26.1023V21.6537C25.7998 21.293 25.5126 21 25.1569 21H14.8007C14.6305 21 14.4678 21.0687 14.347 21.1905L10.9888 24.5898C10.7368 24.8451 10.7368 25.26 10.9888 25.5153C15.5625 30.1456 20.1333 34.7779 24.7032 39.4083C25.1084 39.8183 25.7989 39.5272 25.7989 38.9451V30.7259C25.7989 30.3652 25.5116 30.0721 25.1559 30.0721H23.1777C22.823 30.0721 22.5348 30.3642 22.5348 30.7259V30.9087C22.5348 31.4889 21.8472 31.781 21.4411 31.3738L15.6129 25.5211C15.359 25.2658 15.358 24.849 15.612 24.5927L15.6966 24.5076C15.8174 24.3857 15.98 24.318 16.1493 24.318H21.8928C22.2476 24.318 22.5357 24.6101 22.5357 24.9718V26.1023C22.5357 26.463 22.823 26.756 23.1787 26.756H25.1569C25.5116 26.756 25.7998 26.464 25.7998 26.1023Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.4791 19.4738L26.1426 16.5508C26.3903 16.1153 27.0097 16.1153 27.2574 16.5508L28.9181 19.4728C29.0334 19.6751 29.2458 19.8 29.4754 19.8H31.7554C32.2509 19.8 32.5605 19.2551 32.3128 18.8195L27.2574 9.92663C27.0097 9.49109 26.3903 9.49109 26.1426 9.92663L21.0872 18.8195C20.8395 19.2551 21.1491 19.8 21.6446 19.8H23.9217C24.1513 19.8 24.3638 19.6751 24.4791 19.4738Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5575 36.3388H15.9393C15.4414 36.3388 15.1303 35.8035 15.3792 35.3756L16.4046 33.6119C16.5511 33.3599 16.509 33.0414 16.3012 32.836L14.8411 31.3879C14.5405 31.0894 14.0369 31.1559 13.8243 31.521L9.68722 38.6368C9.43829 39.0647 9.74946 39.6 10.2473 39.6H21.5518C22.1282 39.6 22.4164 38.9078 22.0085 38.5037L20.0142 36.5261C19.8926 36.4053 19.7288 36.3378 19.5575 36.3378V36.3388Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.9819 36.5264L31.9907 38.5039C31.5828 38.9089 31.8719 39.6 32.4483 39.6H43.7522C44.25 39.6 44.5611 39.0648 44.3122 38.637L40.1728 31.521C39.9603 31.1559 39.4567 31.0894 39.1561 31.3879L37.6962 32.8358C37.4894 33.0412 37.4464 33.3597 37.5928 33.6116L38.6181 35.3751C38.867 35.8029 38.5559 36.3382 38.0581 36.3382H34.4404C34.2691 36.3382 34.1044 36.4057 33.9828 36.5264H33.9819Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <CardBody className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="white" className="font-medium">
            CyberpunkCity
          </Typography>
          <Chip className="rounded-full" color="green" value="Live" />
        </div>
        <Typography color="white" className="opacity-70 font-normal">
          One of the world’s first functioning metaverse built on Unreal Engine
          5, offering an immersive and unique gaming experience as well as
          socializing and holding events.
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
            id="mask0_0_612"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <circle cx="18" cy="18" r="18" fill="white" />
          </mask>
          <g mask="url(#mask0_0_612)">
            <circle cx="18" cy="18" r="18" fill="#E2343E" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.2734 27.3051L25.3723 21.142C25.6772 20.8338 25.4618 20.305 25.0308 20.305H22.9292C22.801 20.305 22.6786 20.3565 22.5877 20.4479L21.7301 21.3147C21.4252 21.6229 20.9048 21.4039 20.9048 20.968V16.4789C20.9048 16.2084 21.121 15.9886 21.3887 15.9886H25.6457C25.7739 15.9886 25.897 16.0401 25.9879 16.1322L26.0523 16.1975C26.2413 16.389 26.2413 16.6994 26.0523 16.8902L25.9636 16.9801C25.6586 17.2891 25.8748 17.8164 26.3057 17.8164H28.4346C28.5627 17.8164 28.6859 17.7649 28.7768 17.6728L29.5585 16.8807C29.7474 16.6893 29.7474 16.3788 29.5585 16.1881L27.0473 13.6436C26.9564 13.5515 26.8333 13.5 26.7052 13.5H18.9341C18.6671 13.5 18.4502 13.719 18.4502 13.9903V26.9592C18.4502 27.3951 18.9706 27.6141 19.2755 27.3059L19.2734 27.3051Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.0996 17.3267V13.9903C17.0996 13.7198 16.8842 13.5 16.6174 13.5H8.85029C8.72261 13.5 8.60063 13.5515 8.51004 13.6429L5.99138 16.1923C5.80235 16.3838 5.80235 16.695 5.99138 16.8865C9.42164 20.3592 12.8498 23.8335 16.2772 27.3062C16.581 27.6138 17.0989 27.3954 17.0989 26.9588V20.7944C17.0989 20.5239 16.8835 20.3041 16.6167 20.3041H15.133C14.867 20.3041 14.6508 20.5231 14.6508 20.7944V20.9315C14.6508 21.3667 14.1351 21.5857 13.8306 21.2804L9.45945 16.8908C9.26899 16.6993 9.26828 16.3867 9.45873 16.1945L9.52222 16.1307C9.61281 16.0393 9.73478 15.9885 9.86175 15.9885H14.1694C14.4354 15.9885 14.6516 16.2076 14.6516 16.4788V17.3267C14.6516 17.5973 14.867 17.817 15.1338 17.817H16.6174C16.8835 17.817 17.0996 17.598 17.0996 17.3267Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.1093 12.3554L17.357 10.1631C17.5428 9.83647 18.0072 9.83647 18.193 10.1631L19.4385 12.3547C19.525 12.5064 19.6844 12.6 19.8566 12.6H21.5666C21.9382 12.6 22.1704 12.1913 21.9846 11.8647L18.193 5.19501C18.0072 4.86835 17.5428 4.86835 17.357 5.19501L13.5654 11.8647C13.3796 12.1913 13.6118 12.6 13.9834 12.6H15.6913C15.8635 12.6 16.0228 12.5064 16.1093 12.3554Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4186 25.0041H9.70496C9.33156 25.0041 9.09818 24.6026 9.28488 24.2817L10.0539 22.9589C10.1638 22.7699 10.1322 22.531 9.97639 22.377L8.88132 21.291C8.65585 21.0671 8.27814 21.117 8.11872 21.3908L5.0159 26.7277C4.8292 27.0485 5.06258 27.45 5.43598 27.45H13.9143C14.3466 27.45 14.5628 26.9309 14.2569 26.6278L12.7611 25.1446C12.6699 25.054 12.5471 25.0034 12.4186 25.0034V25.0041Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.2362 25.1448L21.7427 26.6279C21.4369 26.9317 21.6537 27.45 22.0859 27.45H30.5639C30.9372 27.45 31.1706 27.0486 30.9839 26.7277L27.8793 21.3908C27.72 21.117 27.3423 21.0671 27.1169 21.2909L26.0219 22.3769C25.8668 22.5309 25.8345 22.7698 25.9444 22.9587L26.7133 24.2814C26.9 24.6022 26.6667 25.0036 26.2933 25.0036H23.5801C23.4515 25.0036 23.3281 25.0543 23.2369 25.1448H23.2362Z"
              fill="white"
            />
          </g>
        </svg>

        <Button className="ml-auto" color="dark" size="sm">
          Swap on Exchange
        </Button>
      </CardFooter>
    </Card>
  );
}