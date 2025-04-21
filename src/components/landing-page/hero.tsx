import { Button } from "@/components/ui/button";
import Image from "next/image";
import Svg1 from "@/components/icons/mysvg1";
import Svg2 from "@/components/icons/mysvg2";
const Hero = () => {
  return (
    <div className="bg-primary-purple  relative mb-52 py-36 overflow-hidden ">
      {/* <Image
        src="/images/image3.png"
        alt="image3"
        width={100}
        height={100}
        className="absolute top-0 left-10 w-1/2 h-1/2 object-cover  "
      /> */}
      <div className="absolute -top-24 left-0 overflow-hidden">
        <Svg1 />
      </div>
      <div className="flex flex-row items-start justify-center gap-10 px-28 ">
        <div className="flex flex-col items-start ">
          <p className="text-white text-start">Featured Post</p>
          <div className="pt-8 pb-8 ">
            <h1 className="text-white  text-6xl font-bold ">How AI will</h1>
            <h2 className="text-white text-6xl font-bold ">
              Change the Future
            </h2>
          </div>

          <p className="text-white text-start pb-8 ">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <Button variant="outline"> Read More</Button>
        </div>
        <div className="">
          <Image
            src="/images/image2.jpg"
            alt="image2"
            width={608}
            height={576}
            layout="responsive"
            className="rounded-lg shadow-lg shadow-gray-500/50  z-10 "
          />
        </div>
      </div>
      <div className="absolute -bottom-36 -right-14 overflow-hidden z-20">
        <Svg2 />
      </div>
    </div>
  );
};

export default Hero;
