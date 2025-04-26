import { Button } from "../ui/button";
import Image from "next/image";

const FeaturedPost = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-10 lg:px-20 ">
      <div className="flex flex-col md:flex-row gap-10 w-full p-5  border-2 md:border-none rounded-2xl shadow-sm md:shadow-none">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/image1.avif"
            alt="Futuristic AI-powered home robot"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 60vw"
            className="rounded-2xl shadow-lg w-full h-64 md:h-80 lg:h-96 object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <p className="text-sm text-gray-600">
            <strong>DEVELOPMENT</strong>{" "}
            <span className="pl-2">16 March 2023</span>
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold md:line-clamp-2 lg:line-clamp-none">
            How to make a Game look more attractive with New VR & AI Technology
          </h2>
          <p className="text-xs md:text-base text-[#666666] line-clamp-4 md:line-clamp-3 lg:line-clamp-none">
            Google has been investing in AI for many years and bringing its
            benefits to individuals, businesses and communities. Whether it’s
            publishing state-of-the-art research, building helpful products or
            developing tools and resources that enable others, we’re committed
            to making AI accessible to everyone.
          </p>
          <div>
            <Button
              type="submit"
              variant="outline"
              className=" border-2 border-primary-purple   hover:text-primary-purple text-primary-purple"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
