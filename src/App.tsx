import Navbar from "./sections/Navbar"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="mx-auto mt-24 max-w-6xl w-full py-4 border-t-2">
        <div className="flex justify-between items-center text-2xl">
          <p>Designed & built by Panji</p>
          <p>Built with React & Tailwind © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}

export default App