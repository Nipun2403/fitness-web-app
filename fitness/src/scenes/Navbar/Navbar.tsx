
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logo from "@/assets/Logo.png";
import { useState } from "react";
import Links from "./Links";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";


type Props = {
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between ";

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const navbarBackground = !isTopOfPage && "bg-primary-100 drop-shadow" 

  return (
    <nav>
      {/* Parent Container Div */}
      <div className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-10`}>
        {/* Secondry Container Div */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* Another Div Container */}
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left Side */}
            <img
              src={Logo}
              alt="Logo"
            />

            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full `}>
                {/* Inner Left */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Links
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Benifits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                {/* Inner Right */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton  setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="rounded-full bg-secondary-500 p-2 text-white text-lg"
                >
                  <FaBars />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU*/}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* MENU CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button
              className=" text-xl text-gray-400"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <RxCross2 />
            </button>
          </div>

          {/* MOBILE MENU ITEMS */}
          <div className=" flex flex-col ml-[33%] gap-12 text-2xl font-bold">
            <Links
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Benifits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
