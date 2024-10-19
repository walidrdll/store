import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {Image} from "@nextui-org/image";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import {Card, CardBody, CardFooter} from "@nextui-org/card";
export default function Home()  {
  const list = [
    {
      title: "Orange",
      img: "/image1.jpg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/image2.jpg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/image2.jpg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/image2.jpg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/image2.jpg",
      price: "$15.70",
    },

  ];
  return (
    <>
     <section className="bg-slate-100  md:hidden">
      <div className="grid gap-4 grid-cols-2">
      <div className="col-span-2 min-h-[200px] rounded-lg bg-red-800">
          <Image
          height={200}
          width={375}
          alt="NextUI hero Image"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          />
      </div>
      </div>
      <p className="mt-4 pl-2 text-sm font-bold">Découvrez nos catégories</p>
      <div className="flex space-x-2 mt-4 overflow-x-auto pt-3 pb-3">
          <div className="min-h-[80px] min-w-[80px] bg-gray-700 rounded-full">
          <Image
          height={80}
          width={80}
          className="rounded-full"
          alt="NextUI hero Image"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
          
          </div>
          <div className="min-h-[80px] min-w-[80px] bg-gray-700 rounded-full"></div>
          <div className="min-h-[80px] min-w-[80px] bg-gray-700 rounded-full"></div>
          <div className="min-h-[80px] min-w-[80px] bg-gray-700 rounded-full"></div>
          <div className="min-h-[80px] min-w-[80px] bg-gray-700 rounded-full"></div>
          <div className="min-h-[80px] min-w-[80px] bg-gray-700 rounded-full"></div>
          <div className="min-h-[80px] min-w-[80px] bg-gray-700 rounded-full"></div>
        </div>
    </section>
    <section className="mt-1 bg-slate-100  md:hidden">
    <p className="mt-4 pl-2 text-sm font-bold">les offres du moments</p>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    </section>
    </>
    
  );
}
