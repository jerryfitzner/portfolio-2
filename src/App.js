import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <div>
          <Link to='header' smooth duration={500} className="fixed bottom-5 right-5 text-4xl cursor-pointer duration-300 hover:text-rose-600 hover:scale-105">
            {<BsFillArrowUpSquareFill />}
          </Link>
        </div>
        <Profile />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
