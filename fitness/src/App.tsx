import { FlatTree } from "framer-motion";
import { useEffect, useState } from "react";
import Benefits from "./scenes/Benefits/Benefits";
import Home from "./scenes/Home/Home";
import Navbar from "./scenes/Navbar/Navbar";
import { SelectedPage } from "./shared/types";

function App() {
  // Setting State for Selected and active page
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20 ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;

