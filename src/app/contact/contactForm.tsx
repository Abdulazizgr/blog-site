import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <section className="flex items-center justify-center py-10 px-8  md:px-10 lg:px-20">
      <div className="flex items-center justify-center bg-white rounded-2xl shadow-lg -mt-28 sm:-mt-36 md:-mt-40 w-full md:w-auto xl:w-1/2">
        <form
          action=""
          className="flex flex-col items-start justify-center gap-6 p-8 sm:p-16 w-full "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-base font-medium text-[#4C4C4C]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 border border-[#C4C4C4] rounded-md w-full focus:outline-none focus:ring-1 "
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-base font-medium text-[#4C4C4C]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 border border-[#C4C4C4] rounded-md w-full focus:outline-none focus:ring-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-base font-medium text-[#4C4C4C] "
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 p-2 border border-[#C4C4C4] rounded-md w-full focus:outline-none focus:ring-1"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-base font-medium text-[#4C4C4C]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 p-2 border border-[#C4C4C4] rounded-md w-full focus:outline-none focus:ring-1"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="message"
              className="text-base font-medium text-[#4C4C4C]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="mt-1 p-2 border border-[#C4C4C4] rounded-md w-full focus:outline-none focus:ring-1"
            ></textarea>
          </div>
          <div className="flex justify-center w-full">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md mt-4">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
