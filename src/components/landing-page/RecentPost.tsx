import Image from "next/image";
import { Button } from "../ui/button";
import BlogCard from "../blogCard";

const RecentPost = () => {
  return (
    <section className="flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
      <div className="flex  items-center justify-between gap-4  w-full mb-16">
        <h2 className="font-bold text-md sm:text-2xl md:text-4xl">
          Our Recent Post
        </h2>
        <Button
          type="submit"
          variant="outline"
          className=" border-2 text-xs sm:text-sm border-white bg-primary-purple hover:bg-primary-purple/90 hover:text-white text-white"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default RecentPost;
