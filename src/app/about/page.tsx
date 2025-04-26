import Image from "next/image";
import Card from "./card";
const AboutPage = () => {
  return (
    <section className="flex flex-col py-10 px-4 md:px-10 lg:px-20 gap-16">
      <div className="flex flex-col items-center justify-center gap-6">
        <h3 className="text-base text-medium font-semibold">ABOUT US</h3>
        <h1 className="text-2xl  md:text-4xl lg:text-5xl text-dark text-center font-bold max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl">
          Creative Blog Writting and publishing site
        </h1>

        <p className="text-sm sm:text-base text-medium text-center w-full md:max-w-xl lg:max-w-5xl">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>
      </div>
      <Image
        src="/images/image11.avif"
        alt="About Us"
        width={600}
        height={300}
        className="rounded-2xl shadow-lg w-full h-auto lg:h-[550px]  object-cover"
      />

      <div className="flex flex-col justify-center items-start gap-10">
        <p className="text-medium">HOW WE WORK</p>
        <div className="flex flex-col md:flex-row  justify-between items-start w-full gap-8">
          <h2 className="text-3xl sm:text-5xl leading-tight md:leading-normal max-w-md  md:max-w-lg">
            I will show you how our team works
          </h2>
          <p className="text-base text-light max-w-md md:pt-32 lg:pt-28 ">
            Bring to the table win-win market strategies to ensure perfect
            articles.{" "}
          </p>
        </div>

        <Card />
      </div>
    </section>
  );
};

export default AboutPage;
