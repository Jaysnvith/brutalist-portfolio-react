import { motion } from "motion/react";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <Navbar />
      </header>

      <main className="bg-[linear-gradient(to_bottom,var(--color-step-1),var(--color-step-2),var(--color-step-3),var(--color-step-4))]">
        <About />
        <Skills />
        <Projects />
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
