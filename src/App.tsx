import Navbar from "./sections/Navbar"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 flex justify-center">
        <Navbar />
      </header>

      <main>
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="bg-step-4">
        <div className="flex justify-between items-center max-w-6xl w-full mx-auto py-4 border-t-2 text-2xl">
          <p>Designed & built by Panji</p>
          <p>Built with React & Tailwind © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}

export default App