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
