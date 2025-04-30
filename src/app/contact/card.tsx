import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, Mail, Phone } from "lucide-react";

const contactInfo = [
  { icon: Home, title: "Office", description: "Victoria Street, London, UK" },
  { icon: Mail, title: "Email", description: "hello@zarrin.com" },
  { icon: Phone, title: "Phone", description: "(001) 2342 3451" },
];

const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full pt-7 pb-10 px-4 md:px-10 lg:px-24">
      {contactInfo.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <Card
            key={index}
            className="bg-white flex flex-col items-center justify-center "
          >
            <CardHeader>
              <CardTitle className="w-14 h-14 rounded-full bg-primary-purple p-4 text-white">
                <IconComponent /> {/* Render the icon component */}
              </CardTitle>
              <CardDescription className="text-primary-purple text-base text-center">
                {item.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#7A7A7A] text-base text-center">
                {item.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ContactCard;
