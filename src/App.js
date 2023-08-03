import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Scroll from "./components/Scroll";



function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Scroll />
        <Profile />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
