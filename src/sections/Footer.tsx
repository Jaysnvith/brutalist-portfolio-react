import { motion } from "motion/react";

function Footer() {

  return (
    <>
      <motion.div
        className="bg-background text-foreground"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ ease: "linear" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between min-h-12 max-w-7xl mx-auto px-6">
          <p className="hidden md:block">DESIGNED & BUILT BY PANJI M.B</p>
          <p>BUILT WITH REACT © {new Date().getFullYear()}</p>
        </div>
      </motion.div>
    </>
  )
}

export default Footer;
