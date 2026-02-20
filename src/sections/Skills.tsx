import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { popIn } from "../animations/popIn";
import { skillData } from "../data/skill.data";
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
import Card from "../components/Card";

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

      <motion.div
        className="grid grid-cols-3 md:grid-cols-6 place-items-center gap-4 p-1 ring-2 bg-surface ring-line-2 text-surface-fg"
        variants={popIn}
        initial="hidden"
        whileInView="visible"
      >
          {skillData.map(({ id, value }) => {
            const Icon = skillIcon[value as keyof typeof skillIcon];
            const activeDesc = showDesc === id;
            return (
              <motion.button
                key={id}
                className="relative p-1 text-start"
                initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
                animate={{ 
                  boxShadow: activeDesc ? "0 0 0 2px var(--color-surface-fg)" : "0 0 0 0 rgba(0,0,0,0)"
                }}
                onHoverStart={() => setShowDesc(id)}
                onHoverEnd={() => setShowDesc(null)}
                onClick={() => setShowDesc(activeDesc ? null : id)}
              >
                <Icon className="w-12 md:w-18 hover:animate-pulse" />

                <AnimatePresence>
                  { activeDesc && (
                    <motion.span
                      className="absolute top-1 ring-2 text-sm bg-surface text-surface-fg"
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
      </motion.div>
    </div>
  );
}

export default Skills;
