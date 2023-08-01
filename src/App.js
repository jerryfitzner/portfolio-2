import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Experience from "./components/Experience";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Profile />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}

export default App;
