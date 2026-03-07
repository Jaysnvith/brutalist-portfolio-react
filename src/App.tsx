import { motion } from "motion/react";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { BackgroundSquare } from "./components/BackgroundSquare";

function App() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <Navbar />
      </header>

      <div className="fixed top-28 -z-50 w-full">
        <BackgroundSquare />
      </div>

      <main className="mx-auto max-w-7xl px-4">

        <section
          id="about"
          className="flex min-h-screen w-full items-center py-20"
        >
          <About />
        </section>

        <section id="skills" className="min-h-screen w-full py-20">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen w-full py-20">
          <Projects />
        </section>
      </main>

      <footer className="md:sticky md:bottom-0 z-50">
        <motion.div
          className="bg-surface text-surface-fg"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ ease: "linear" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between min-h-12 max-w-6xl mx-auto px-6">
            <p className="hidden md:block">DESIGNED & BUILT BY PANJI M.B</p>
            <p>BUILT WITH REACT © {new Date().getFullYear()}</p>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default App;
