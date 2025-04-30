import Image from "next/image";
import ContactCard from "./card";
import ContactForm from "./contactForm";

const ContactUsPage = () => {
  return (
    <section className="flex flex-col py-28 gap-6 md:gap-16">
      <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-10 lg:px-20 ">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-dark text-center font-bold w-full">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-medium text-center max-w-md">
          Contact us to publish your content and show ads to our website and get
          a good reach.
        </p>
      </div>
      <ContactCard />

      <Image
        src="/images/image9.avif"
        alt="Contact Us"
        width={600}
        height={300}
        className=" w-full h-auto lg:h-[550px] object-cover pt-10 "
      />
      <ContactForm />
    </section>
  );
};

export default ContactUsPage;
