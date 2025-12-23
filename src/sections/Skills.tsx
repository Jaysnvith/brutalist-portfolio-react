import { motion } from "motion/react";
import Title from "../components/Title";
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
import TailwindCss from "../assets/svg/tailwindCss.svg?react";
import BulmaUi from "../assets/svg/bulmaui.svg?react";
import Bootstrap5 from "../assets/svg/bootstrap5.svg?react";
import Mysql from "../assets/svg/mysql.svg?react";
import Postgresql from "../assets/svg/postgresql.svg?react";
import MsqlServer from "../assets/svg/msqlserver.svg?react";

function Skills() {
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

  return (
    <section id="skills" className="min-h-screen w-full flex items-center">
      <div className="mx-auto max-w-6xl w-full px-6">
        <motion.div
          className="mb-16"
          variants={popIn}
          initial="hidden"
          whileInView="visible"
        >
          <Title contents={["#02", "Skills"]} />
        </motion.div>

        <motion.div
          className="grid grid-cols-10 gap-16"
          variants={popIn}
          initial="hidden"
          whileInView="visible"
        >
          {skillData.map(({ id, value }) => {
            const Icon = skillIcon[value as keyof typeof skillIcon];

            return (
              <motion.div
                key={id}
                className="flex flex-col items-center space-y-2"
                initial={{ y: 0 }}
                whileHover={{ y: 10 }}
              >
                <Icon />
                <span className="px-1 bg-zinc-900 text-zinc-100">{value}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
