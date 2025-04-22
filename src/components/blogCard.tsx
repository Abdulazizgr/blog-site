import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <Card className="rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-48">
          <Image
            src="/images/image5.avif"
            alt="Train on a bridge in a scenic landscape"
            width={300}
            height={200}
          />
        </div>

        {/* Card Content Section */}
        <CardHeader className="pt-4 pb-2">
          <CardDescription className="text-sm text-gray-500">
            Travel 13 March 2023
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-2">
          <h3 className="text-xl font-bold mb-2">
            Train Or Bus Journey? Which one suits?
          </h3>
          <p className="text-gray-700 text-sm">
            The choice between a train or bus journey depends on various factors
            such as the distance of the journey, the time available, the cost,
            and personal preference.
          </p>
        </CardContent>

        <CardFooter className="pt-2">
          <a
            href="#"
            className="text-purple-600 text-sm font-semibold hover:underline"
          >
            Read More...
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogCard;
