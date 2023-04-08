import { ClassType, SelectedPage } from "@/shared/types";
import React from "react";
import { motion } from "framer-motion";
// IMAGES IMPORTS
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image2.png";
import Image3 from "@/assets/image3.png";
import Image4 from "@/assets/image4.png";
import Image5 from "@/assets/image5.png";
import Image6 from "@/assets/image6.png";
import H1Text from "@/shared/H1Text";
import ClassScroll from "./ClassScroll";

const classes: ClassType[] = [
  {
    name: "Weight Training Classes",
    content:
      "uis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: Image1,
  },
  {
    name: "Yoga Classes",
    content:
      "uis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: Image2,
  },
  {
    name: "Ab Core Classes",
    content:
      "uis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    content:
      "uis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: Image4,
  },
  {
    name: "Fitness Classes",
    content:
      "uis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: Image5,
  },
  {
    name: "Training Classes",
    content:
      "uis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: Image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section
      className="w-full bg-primary-100 py-20"
      id="ourclasses"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Title  */}
          <div className="md:w-5/6">
            <H1Text>OUR CLASSES</H1Text>
            <p>
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </motion.div>

        {/* IMAGE SCROLLER */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap ">
            {classes.map((item: ClassType, index) => {
              return <ClassScroll key={index}
              name = {item.name}
              content = {item.content}
              img = {item.image}

              />;
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
