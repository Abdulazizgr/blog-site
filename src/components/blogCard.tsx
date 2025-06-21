import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  id: string;
  title: string;

  description: string;
  image: string;
  date: string;
  tag: string;
  category: string;
};

const BlogCard = ({ blogData }: { blogData: BlogCardProps }) => {
  const { title, description, image, date, tag } = blogData;

  return (
    <div className="">
      <Card className="flex flex-col items-start border-none  shadow-none  bg-[#FAFAFA]">
        <Image
          src={image}
          alt="Blog Image"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg w-full h-80 object-cover "
          loading="lazy"
        />

        <CardHeader className="px-2 pt-10">
          <p className="text-sm text-gray-600 pb-2">
            <strong>{tag}</strong> <span className="pl-2">{date}</span>
          </p>
          <CardTitle>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-dark line-clamp-2">
              {title}
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-2">
          <p className="  text-sm sm:text-base text-medium line-clamp-3">
            {description}
          </p>
        </CardContent>
        <CardFooter className="px-2">
          <Link
            href="/blog/1"
            className="text-primary-purple text-lg sm:text-bases md:text-lg"
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
