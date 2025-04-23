import Svg1 from "@/components/icons/mysvg1";
import Svg2 from "@/components/icons/mysvg2";
import Hero from "@/components/landing-page/hero";
import PopularPost from "@/components/landing-page/PopularPost";
import FeaturedPost from "@/components/landing-page/FeaturedPost";
import RecentPost from "@/components/landing-page/RecentPost";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPost />
      <RecentPost />
      {/* <FeaturedPost /> */}
      <PopularPost />
    </>
  );
}
