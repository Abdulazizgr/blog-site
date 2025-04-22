import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Svg1 from "./icons/mysvg1";
import Svg3 from "./icons/mysvg3";

const CallToAction = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-primary-purple text-white pt-24 pb-32 px-4 md:px-10 lg:px-20 py-5 space-y-5 relative overflow-hidden ">
      <div className="absolute -top-24 -left-12 overflow-hidden hidden sm:block">
        <Svg1 />
      </div>
      <div>
        <h1 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl text-center">
          Get our stories delivered From <br />
          us to your inbox weekly.
        </h1>
      </div>
      <div className="flex  p-4 w-full max-w-sm items-center space-x-3 pt-7">
        <Input
          type="email"
          placeholder="Email"
          className="text-dark bg-white border-none outline-none h-10 sm:h-12 w-full rounded-lg"
        />
        <Button
          type="submit"
          variant="outline"
          // size="lg"
          className="text-xs sm:text-xl sm:h-12 border-2 border-white bg-primary-purple hover:bg-primary-purple/90 hover:text-white text-white"
        >
          Get Started
        </Button>
      </div>
      <div className="flex w-full max-w-lg text-[#BBBBBB] items-center justify-center text-center text-sm">
        <p className="text-sm">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a response the following day.
        </p>
      </div>
      <div className="absolute -bottom-56 right-0 overflow-hidden hidden sm:block">
        <Svg3 />
      </div>
    </div>
  );
};

export default CallToAction;
