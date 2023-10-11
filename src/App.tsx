import { useState } from "react";
import Navbar from "@/scenes/navbar"; /* automatski prepoznaje da se radi o fajlu index.tsx ne trebamo dodatno pisati /index.tsx */
import { SelectedPage } from "@/shared/types";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <>
      <div className="app bg-gray20">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
