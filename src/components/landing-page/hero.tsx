import { Button } from "@/components/ui/button";
import Image from "next/image";
import Svg1 from "@/components/icons/mysvg1";
import Svg2 from "@/components/icons/mysvg2";
const Hero = () => {
  return (
    <section className="bg-primary-purple relative py-5  lg:py-24 overflow-hidden mb-10">
      <div className="hidden lg:block absolute -top-32 left-0 w-1/2 overflow-hidden">
        <Svg1 />
      </div>
      <div className="flex lg:flex-row flex-col items-start justify-center gap-8  md:gap-5  px-4 md:px-10 lg:px-20 w-full ">
        <div className="flex flex-col gap-4 items-start lg:w-1/2  h-1/2">
          <p className="text-white text-start py-2">Featured Post</p>
          <div className="md:pt-8 md:pb-8 ">
            <h1 className="text-white text-4xl sm:text-6xl  font-bold leading-tight">
              How AI will <br /> Change the Future
            </h1>
          </div>

          <p className="text-white text-start text-sm pb-4 md:pb-10 w-full md:w-3/5 ">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <Button variant="outline"> Read More</Button>
        </div>
        <div className="flex justify-center lg:pt-24 xl:pt-0  items-center w-full lg:w-1/2">
          <Image
            src="/images/image6.jpg"
            alt="Futuristic AI-powered home robot"
            title="Futuristic AI-powered home robot"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg w-full h-auto max-w-lg z-20 "
          />
        </div>
      </div>
      <div className="hidden lg:block absolute -bottom-36 -right-14 overflow-hidden z">
        <Svg2 />
      </div>
    </section>
  );
};

export default Hero;
