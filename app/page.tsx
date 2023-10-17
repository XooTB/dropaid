import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main min-h-screen">
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center px-10">
        <h1 className="text-4xl text-white font-sans font-bold">
          Your AI E-Commerce Assistant
        </h1>
        <p className=" text-white font-mono pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione
          quam molestiae. Animi aliquid repudiandae repellat explicabo, corporis
          numquam sequi doloribus, optio nihil ducimus nulla, commodi a maiores
          qui quisquam.
        </p>
        <Link href={"/auth"} className="w-32">
          <Button className="w-32 h-9 mt-2">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}
