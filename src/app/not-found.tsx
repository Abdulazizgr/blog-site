import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center py-14 lg:py-0 h-auto lg:min-h-screen p-4 ">
      <div className="flex flex-col items-center justify-center bg-primary-purple gap-6 p-6 sm:p-12 md:gap-8 md:p-16 rounded-3xl shadow-lg">
        <h1 className="text-8xl md:text-9xl text-center text-white">404</h1>
        <p className="text-xl   md:text-2xl text-center text-white">
          Sorry! <br /> The link is broken, try to refresh or go to home
        </p>
        <Link href="/">
          <Button variant="outline" className="text-[#333333] text-base p-4">
            Go To Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
