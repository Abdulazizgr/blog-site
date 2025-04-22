import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const PopularPost = () => {
  return (
    <div className="flex flex-col px-28 py-10 gap-4">
      <div className="flex flex-row justify-between ">
        <h2 className="text-3xl font-bold">Popular Post </h2>
        <Button className="bg-primary-purple text-white  hover:bg-primary-purple/95 hover:text-white">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-8 ">
        <div className="">
          <Image
            src="/images/image5.avif"
            alt="image5"
            width={10}
            height={10}
            layout="responsive"
            className="rounded-lg shadow-lg "
          />
        </div>
        <Card>
          <CardHeader>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PopularPost;
