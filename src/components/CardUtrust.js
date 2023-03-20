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
        <img src="./utrust.png" alt="ui/ux review check" />
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
            id="mask0_0_693"
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
          <g mask="url(#mask0_0_693)">
            <path
              d="M51.0001 26.9947C51.0001 40.8018 39.8072 51.9947 26 51.9947C12.1929 51.9947 1 40.8018 1 26.9947C1 26.3987 1.01733 25.8114 1.05933 25.2247C1.4303 20.1017 3.35741 15.2143 6.58267 11.2167C6.82934 10.8497 7.1275 10.5201 7.46801 10.238C9.53962 7.95968 12.0079 6.07666 14.7527 4.68069C17.4947 3.28631 20.4736 2.41757 23.5354 2.11935C24.344 2.04268 25.1607 2.00002 25.9947 2.00002C30.6418 1.9946 35.1983 3.28541 39.152 5.72735C39.382 5.87202 39.6034 6.00802 39.824 6.16136C40.19 6.40802 40.5574 6.66336 40.9134 6.91869C41.39 7.26736 41.8467 7.64202 42.292 8.02469C42.3854 8.10136 42.4707 8.17802 42.5587 8.25469L42.5674 8.26336C44.3407 9.83034 45.8823 11.6413 47.146 13.642C48.2257 15.345 49.0918 17.1743 49.7247 19.0887C49.9121 19.642 50.0734 20.2034 50.2181 20.774C50.2521 20.9187 50.2847 21.0547 50.3201 21.1994C50.3554 21.344 50.3867 21.4887 50.4134 21.6334C50.4727 21.9227 50.5327 22.212 50.5834 22.5C50.8652 23.9816 51.0047 25.4866 51.0001 26.9947Z"
              fill="#FCFDFC"
            />
            <path
              d="M32.5497 32.814C30.9241 33.3047 29.4548 34.2112 28.2871 35.444C28.2806 35.4501 28.2748 35.4568 28.2697 35.464C28.1026 35.6373 27.9457 35.82 27.7997 36.0114C26.9085 37.1259 26.2742 38.4234 25.9424 39.8114C26.2742 38.4234 26.9084 37.1259 27.7997 36.0114C27.9457 35.82 28.1026 35.6373 28.2697 35.464C28.2752 35.4587 28.2801 35.4529 28.2844 35.4467C29.4533 34.2128 30.924 33.3054 32.5511 32.814L32.5497 32.814Z"
              fill="#FCFCFD"
            />
            <path
              d="M36.2421 16.232V37.734H15.7534V16.232H36.2421V10.084H23.674L9.37402 20.7507V27.5927C9.37402 36.5387 16.986 44.054 26.2854 43.9107C30.6092 43.848 34.7458 42.1365 37.8501 39.126C40.8841 36.1858 42.6053 32.1469 42.6247 27.922V16.232H36.2421Z"
              fill="#6932D4"
            />
          </g>
        </svg>
      </div>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="white" className="font-medium">
            Utrust
          </Typography>
          <Chip className="rounded-full" color="green" value="Live" />
        </div>
        <Typography color="white" className="opacity-70">
          The world’s first crypto payment solution to offer instant
          transactions, buyer protection and crypto-to-cash settlements.
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
      <CardFooter className="flex pt-0">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#D8D8D8" />
          <mask
            id="mask0_0_705"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <circle cx="18" cy="18" r="18" fill="white" />
          </mask>
          <g mask="url(#mask0_0_705)">
            <path
              d="M37.9999 17.9979C37.9999 29.0447 29.0456 38 18 38C6.95429 38 -2 29.0447 -2 17.9979C-2 17.521 -1.98613 17.0511 -1.95253 16.5817C-1.65576 12.4829 -0.114078 8.57252 2.46612 5.37413C2.66345 5.08051 2.90198 4.81681 3.17439 4.59111C4.83168 2.76825 6.80631 1.26167 9.00211 0.144775C11.1958 -0.970847 13.5788 -1.66591 16.0282 -1.90451C16.6752 -1.96585 17.3285 -1.99999 17.9957 -1.99999C21.7133 -2.00432 25.3585 -0.971566 28.5215 0.982197C28.7055 1.09794 28.8826 1.20675 29.0591 1.32943C29.3519 1.52679 29.6458 1.73108 29.9306 1.93537C30.3119 2.21433 30.6773 2.51409 31.0335 2.82026C31.1082 2.8816 31.1765 2.94294 31.2469 3.00428L31.2538 3.01121C32.6724 4.26493 33.9057 5.71387 34.9167 7.3146C35.7804 8.6771 36.4733 10.1407 36.9796 11.6724C37.1295 12.1151 37.2586 12.5642 37.3743 13.0208C37.4015 13.1366 37.4276 13.2454 37.4559 13.3611C37.4842 13.4769 37.5092 13.5926 37.5306 13.7084C37.578 13.9398 37.626 14.1713 37.6666 14.4018C37.892 15.5871 38.0036 16.7913 37.9999 17.9979Z"
              fill="#FCFDFC"
            />
            <path
              d="M23.24 22.6538C21.9395 23.0464 20.764 23.7717 19.8298 24.758C19.8247 24.7629 19.8201 24.7683 19.816 24.774C19.6823 24.9126 19.5568 25.0589 19.44 25.2119C18.727 26.1037 18.2196 27.1418 17.9541 28.2523C18.2196 27.1418 18.7269 26.1036 19.44 25.2119C19.5568 25.0589 19.6823 24.9126 19.816 24.774C19.8203 24.7698 19.8242 24.7652 19.8277 24.7602C20.7628 23.773 21.9394 23.0469 23.241 22.6538L23.24 22.6538Z"
              fill="#FCFCFD"
            />
            <path
              d="M26.8172 9.90696V27.0686H10.1801V9.90696H26.8172V5H16.6118L5 13.5135V18.9744C5 26.1145 11.181 32.1128 18.7322 31.9984C22.2432 31.9484 25.6023 30.5824 28.1229 28.1796C30.5866 25.8328 31.9842 22.6093 32 19.2372V9.90696H26.8172Z"
              fill="#6932D4"
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