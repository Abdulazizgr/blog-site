import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
const BlogCard = () => {
  return (
    <div className=" py-10">
      <Card className="flex flex-col items-start  border-none shadow-none ">
        <Image
          src="/images/image4.avif"
          alt="Blog Image"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg w-full h-80 object-cover "
          loading="lazy"
        />

        <CardHeader className="px-2 pt-10">
          <p className="text-sm text-gray-600 pb-2">
            <strong>DEVELOPMENT</strong>{" "}
            <span className="pl-2">16 March 2023</span>
          </p>
          <CardTitle>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-dark">
              8 Rules of Travelling In Sea You Need To Know
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-2">
          <p className="  text-xs sm:text-base text-medium">
            Travelling in sea has many advantages. Some of the advantages of
            transporting goods by sea include: you can ship large volumes at
            costs{" "}
          </p>
        </CardContent>
        <CardFooter className="px-2">
          <Link
            href="/blog/1"
            className="text-primary-purple text-sm sm:text-bases"
          >
            {" "}
            Read more ...
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
