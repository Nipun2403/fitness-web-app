// IMPORTS
import ActionButton from "@/shared/ActionButton";
import H1Text from "@/shared/H1Text";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactGraphic from "@/assets/ContactUsPageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {

  const inputStyle = "bg-primary-300 text-white text-lg placeholder:text-white outline-none px-4 py-3 rounded-xl w-full mb-5"
  return (
    <motion.div
      className="py-20 md:px-20"
      onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      <div className="md:flex items-center justify-center gap-32 content-center">

        <div className="mx-auto w-5/6">
          

        {/* TITLE AND DESCRIPTION */}
        <div>
          <H1Text>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </H1Text>
          <p className="pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </p>
        </div>

        {/* FORM */}
        <div className="text-left py-8">
          <form className="mb-4" >

          <input className={inputStyle} placeholder="Name" />
          <input className={inputStyle} placeholder="Email" />
          <textarea className={inputStyle} placeholder="Message" />

          </form>
        <ActionButton setSelectedPage={setSelectedPage}>Submit</ActionButton>
        </div>
        </div>
        <div>

        <img src={ContactGraphic} alt="Contact Page Graphic" className="px-6"/>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
