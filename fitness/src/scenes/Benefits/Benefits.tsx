import { SelectedPage } from "@/shared/types";
import { HiHomeModern, HiUserGroup, HiAcademicCap } from "react-icons/hi2";
import { motion } from "framer-motion";
import H1Text from "@/shared/H1Text";
import { BenefitType } from "@/shared/types";
import BenefitsCard from "./BenefitsCard";

const benefits: Array<Object> = [
  {
    icon: <HiHomeModern className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    icon: <HiUserGroup className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    icon: <HiAcademicCap className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren :0.2  }
  }
}

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
          <H1Text>MORE THAN JUST A GYM</H1Text>
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
        initial = "hidden"
        whileInView={"visible"}
        viewport={{once:true, amount:0.4}}
        variants={container}
        >

        {benefits.map( (benefit) => {
          return <BenefitsCard
          key={benefit.title}
          icon={benefit.icon}
          description={benefit.description}
          title={benefit.title}
          setSeletedPage={setSelectedPage}
          />
  
        })
        }        

        </motion.div>
      </motion.div>
    </section>
  );
}

export default Benefits;
