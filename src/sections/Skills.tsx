import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { popIn } from "../animations/popIn";
import { categories, skillData } from "../data/skill.data";
import Card from "../components/Card";
import Cpp from "../assets/svg/cpp.svg?react";
import Csharp from "../assets/svg/csharp.svg?react";
import Python from "../assets/svg/python.svg?react";
import Java from "../assets/svg/java.svg?react";
import Html5 from "../assets/svg/html5.svg?react";
import Php from "../assets/svg/php.svg?react";
import Css3 from "../assets/svg/css3.svg?react";
import Js from "../assets/svg/js.svg?react";
import Ts from "../assets/svg/ts.svg?react";
import Django from "../assets/svg/django.svg?react";
import React from "../assets/svg/react.svg?react";
import TailwindCss from "../assets/svg/tailwindcss.svg?react";
import BulmaUi from "../assets/svg/bulmaui.svg?react";
import Bootstrap5 from "../assets/svg/bootstrap5.svg?react";
import Mysql from "../assets/svg/mysql.svg?react";
import Postgresql from "../assets/svg/postgresql.svg?react";
import MsqlServer from "../assets/svg/msqlserver.svg?react";

const skillIcon = {
  python: Python,
  cpp: Cpp,
  csharp: Csharp,
  java: Java,
  html: Html5,
  php: Php,
  css: Css3,
  javascript: Js,
  typescript: Ts,
  django: Django,
  react: React,
  tailwind: TailwindCss,
  bulma: BulmaUi,
  bootstrap: Bootstrap5,
  mysql: Mysql,
  postgresql: Postgresql,
  mssql: MsqlServer,
} as const;

function Skills() {
  const [selectCategory, setSelectCategory] = useState<string | null>(
    "language",
  );
  const [showDesc, setShowDesc] = useState<string | null>(null);

  return (
    <div>
      <motion.div
        className="flex mb-16 text-4xl"
        variants={popIn}
        initial="hidden"
        whileInView="visible"
      >
        <Card className="px-2">#02</Card>
        <Card className="px-2">MY SKILLS</Card>
      </motion.div>

      <motion.div variants={popIn} initial="hidden" whileInView="visible">
        <Card className="grid grid-rows-3 md:grid-rows-2 grid-cols-3 md:grid-cols-5 gap-6">
          {skillData
            .filter((skill) => skill.category === selectCategory)
            .map(({ id, value }) => {
              const Icon = skillIcon[value as keyof typeof skillIcon];
              const activeDesc = showDesc === id;

              return (
                <motion.button
                  key={id}
                  className="relative m-4 p-1"
                  initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
                  animate={{
                    boxShadow: activeDesc
                      ? "0 0 0 2px var(--color-foreground)"
                      : "0 0 0 0 rgba(0,0,0,0)",
                  }}
                  onHoverStart={() => setShowDesc(id)}
                  onHoverEnd={() => setShowDesc(null)}
                  onClick={() => setShowDesc(activeDesc ? null : id)}
                >
                  <Icon className="hover:animate-pulse" />

                  <AnimatePresence>
                    {activeDesc && (
                      <motion.span
                        className="absolute top-1 left-1 ring-2 bg-background text-foreground"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        {value}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
        </Card>
      </motion.div>

      <motion.div
        className="-mt-2 ml-6 w-fit"
        variants={popIn}
        initial="hidden"
        whileInView="visible"
      >
        <Card className="flex flex-col items-start gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectCategory(category)}
              className="uppercase"
            >
              <span className={`${selectCategory === category ? "visible" : "invisible"}`}>
                ►
              </span>
              <span className="mx-2 py-1 hover:bg-foreground hover:text-background transition-colors">
                {category}
              </span>
            </button>
          ))}
        </Card>
      </motion.div>
    </div>
  );
}

export default Skills;
