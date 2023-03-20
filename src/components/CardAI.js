import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
 
export default function Example() {
  return (
    <Card color="dark" className="w-full max-w-[26rem] shadow-lg h-fit">
      <CardHeader floated={false} className="shadow-none">
        <img src="./ai-human.jpg" alt="ui/ux review check" />
      </CardHeader>
      <CardBody className="p-4">
        <p className="text-cyan font-semibold text-sm mb-2">Partnership</p>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="white" className="font-medium">
            MultiversX x HUMAN
          </Typography>
        </div>
        <Typography color="white" className="opacity-70 font-normal">
          AI-Powered HUMAN Protocol Goes Live on the MultiversX Mainnet to Enhance Efficiency and Scalability for Hundreds of Millions of …
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center p-4 pt-0">
        <p className="text-white opacity-50 text-sm mb-0">Feb 28, 2023 - 2 min read</p>

        <Button className="ml-auto" color="dark" size="sm">
          Read more
          <i className="fas fa-chevron-right text-xs ml-2"></i>
        </Button>
      </CardFooter>
    </Card>
  );
}