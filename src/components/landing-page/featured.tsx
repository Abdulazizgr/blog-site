import Image from "next/image";

const FeaturedPost = () => {
  return (
    <div className="py-36 px-28 w-full">
      <Image
        src="/images/image4.avif"
        alt="image2"
        width={608}
        height={576}
        className="rounded-lg shadow-lg shadow-gray-500/50  "
      />
    </div>
  );
};

export default FeaturedPost;
