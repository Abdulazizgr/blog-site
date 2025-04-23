import Image from "next/image";
import { Button } from "../ui/button";
import BlogCard from "../blogCard";
import data from "@/app/data/data";

const PopularPost = () => {
  const popularPosts = data.filter((post) => post.Category === "Popular");
  const popularPostsData = popularPosts.slice(0, 6);
  return (
    <section className="flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
      <div className="flex  items-center justify-between gap-4  w-full mb-16">
        <h2 className="font-bold text-md sm:text-2xl md:text-4xl">
          Popular Post
        </h2>
        <Button
          type="submit"
          variant="outline"
          className=" border-2 text-xs sm:text-sm border-white bg-primary-purple hover:bg-primary-purple/90 hover:text-white text-white"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full ">
        {popularPostsData.map((post) => (
          <BlogCard
            key={post._id}
            blogData={{
              id: post._id,
              title: post.Title,
              description: post.Description,
              image: post.postImg,
              tag: post.Tag,
              category: post.Category,
              date: post.Created_at,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularPost;
