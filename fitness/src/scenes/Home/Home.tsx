import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img
                  src={HomePageText}
                  alt="Home Page Text"
                />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Experience the ultimate fitness journey. Our supportive
              community are here to empower and inspire you to achieve your
              health and wellness goals with confidence and professionalism.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay:0.1, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now{" "}
            </ActionButton>

            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex items-end justify-center basis-3/6 md:z-10
        md:ml-40 md:mt-16"
        >
          <img
            alt="Home page graphic"
            src={HomePageGraphic}
          />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img
                alt="RedBull Sponsor"
                src={SponsorRedBull}
              />
              <img
                alt="Fortune Sponsor"
                src={SponsorFortune}
              />
              <img
                alt="Forbes Sponsor"
                src={SponsorForbes}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
