import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar"; /* automatski prepoznaje da se radi o fajlu index.tsx ne trebamo dodatno pisati /index.tsx */
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopPOfPage, setisTopPOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setisTopPOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setisTopPOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);
  return (
    <>
      <div className="app bg-gray20">
        <Navbar isTopOfPage={isTopPOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
