import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Adjust import based on your setup
import Link from "next/link"; // Adjust if using a different routing library

const cardData = [
  {
    id: "01",
    title: "Brainstorming",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated",
  },
  {
    id: "02",
    title: "Analysing",
    description:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
  },
  {
    id: "03",
    title: "News Publishing",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full mt-10 ">
      {/* // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
      {cardData.map((card) => (
        <Card
          key={card.id}
          className="bg-[#FAFAFA] border-none shadow-none hover:shadow-lg transition-all duration-300 hover:bg-primary-purple group"
        >
          <CardHeader>
            <CardTitle className="text-medium opacity-[10%] group-hover:opacity-[100%] text-5xl heading lg:text-7xl transition-colors duration-300 group-hover:text-white">
              {card.id}
            </CardTitle>
            <CardDescription className="text-primary-purple heading text-lg lg:text-2xl transition-colors duration-300 group-hover:text-white">
              {card.title}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base  text-medium opacity-[70%]  transition-colors duration-300 group-hover:text-[#F7F6FE] group-hover:opacity-[70%] line-clamp-5">
              {card.description}
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/"
              className="text-sm text-white border-b-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Learn More
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
