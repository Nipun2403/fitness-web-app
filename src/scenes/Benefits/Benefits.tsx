import { SelectedPage } from "@/shared/types";
import { HiHomeModern, HiUserGroup, HiAcademicCap } from "react-icons/hi2";
import { motion } from "framer-motion";
import H1Text from "@/shared/H1Text";
import { BenefitType } from "@/shared/types";
import BenefitsCard from "./BenefitsCard";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<Object> = [
  {
    icon: <HiHomeModern className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    icon: <HiUserGroup className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    icon: <HiAcademicCap className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = { setSelectedPage: (value: SelectedPage) => void };

function Benefits({ setSelectedPage }: Props) {
  return (
    <section
      id={SelectedPage.Benifits}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <H1Text>MORE THAN JUST A {" "}<span className="text-primary-500">GYM</span>.</H1Text>
          <p className="my-5 text-sm">
            At our gym, we pride ourselves on providing top-of-the-line
            equipment and infrastructure to support our members' fitness
            journeys. Our state-of-the-art facilities, expert trainers, and
            dynamic class offerings will challenge and motivate you to push
            beyond your limits and achieve your fitness goals in a fun,
            energizing atmosphere.
          </p>
        </div>

        {/* BENIFITS */}

        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
        >
          {benefits.map((benefit) => {
            return (
              <BenefitsCard
                key={benefit.title}
                icon={benefit.icon}
                description={benefit.description}
                title={benefit.title}
                setSeletedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 md:flex items-center justify-between gap-20 md:mt-28">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="Benefits Page Graphic"
            src={BenefitsPageGraphic}
          />

          {/* Description */}
          <div className="mt-10 md:mt-0">
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <H1Text>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </H1Text>
                </motion.div>
              </div>
            </div>

            {/* Descriptin */}
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{delay:0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="mb-5">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
