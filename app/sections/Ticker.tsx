"use client";
import Next from "@/public/tech-stack/next.png";
import Tailwind from "@/public/tech-stack/tailwind-css.svg";
import Node from "@/public/tech-stack/node.svg";
import Postgres from "@/public/tech-stack/postgres.png";
import Typescript from "@/public/tech-stack/ts-lettermark-blue.png";
import Firebase from "@/public/tech-stack/Monochrome_Horizontal_Lockup_Optimized_Black.png";
import Express from "@/public/tech-stack/express.svg";
import MongoDB from "@/public/tech-stack/MongoDB_Spring-Green.svg";
import Image from "next/image";
import { motion } from "motion/react";

export const Ticker = () => {
  return (
    <div className=" bg-white">
      <div>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14 items-center"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={Next} alt="next" className="h-16 w-auto" />
            <Image src={Tailwind} alt="tailwind" className="h-8 w-auto" />
            <Image src={Node} alt="Node" className="h-10 w-auto" />
            <Image src={Postgres} alt="Postgres" className="h-28 w-auto" />
            <Image src={Typescript} alt="Typescript" className="h-10 w-auto" />
            <Image src={Firebase} alt="firebase" className="h-10 w-auto" />
            <Image src={Express} alt="Express" className="h-8 w-auto" />
            <Image src={MongoDB} alt="MongoDB" className="h-10 w-auto" />
            {/* Set 2 for animation */}
            <Image src={Next} alt="next" className="h-16 w-auto" />
            <Image src={Tailwind} alt="tailwind" className="h-8 w-auto" />
            <Image src={Node} alt="Node" className="h-10 w-auto" />
            <Image src={Postgres} alt="Postgres" className="h-28 w-auto" />
            <Image src={Typescript} alt="Typescript" className="h-10 w-auto" />
            <Image src={Firebase} alt="firebase" className="h-10 w-auto" />
            <Image src={Express} alt="Express" className="h-8 w-auto" />
            <Image src={MongoDB} alt="MongoDB" className="h-10 w-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
