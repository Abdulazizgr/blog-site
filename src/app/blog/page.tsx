import BlogCard from "@/components/blogCard";
import data from "../data/data";

const BlogPage = () => {
  const blogData = data;

  return (
    <section className="flex flex-col py-10 px-4 md:px-10 lg:px-20 gap-16">
      <div className="flex flex-col items-center justify-center gap-6">
        <h3 className="text-base text-medium font-semibold">OUR BLOGS</h3>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-dark text-center font-bold w-full">
          Find our all blogs from here
        </h1>
        <p className="text-sm sm:text-base text-medium text-center">
          our blogs are written from very research research and well known
          writers writers so that we can provide <br /> you the best blogs and
          articles articles for you to read them all along
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7 w-full mt-10">
        {blogData.map((blog) => (
          <BlogCard
            key={blog._id}
            blogData={{
              id: blog._id,
              title: blog.Title,
              description: blog.Description,
              image: blog.postImg,
              tag: blog.Tag,
              category: blog.Category,
              date: blog.Created_at,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
