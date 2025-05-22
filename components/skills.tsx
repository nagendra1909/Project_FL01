"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaReact, FaJs, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiPostgresql, SiMongodb, SiMaterialui } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';

const skills = [
  { name: "React.Js", level: 90, icon: FaReact },
  { name: "Next.js", level: 90, icon: SiNextdotjs },
  { name: "JavaScript", level: 90, icon: FaJs || DiJavascript },
  { name: "TypeScript", level: 80, icon: SiTypescript },
  { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
  { name: "Firebase", level: 80, icon: SiFirebase },
  { name: "PostgreSQL", level: 80, icon: SiPostgresql },
  { name: "Python", level: 90, icon: FaPython },
  { name: "Node.js", level: 80, icon: FaNodeJs },
  { name: "Express", level: 80, icon: DiJavascript },
  { name: "MongoDB", level: 80, icon: SiMongodb },
  { name: "Material UI", level: 80, icon: SiMaterialui },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Skills</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-gray-900/70 p-4 rounded-lg">
                <div className="mb-2 flex justify-between items-center">
                  <div className="flex items-center">
                    {skill.icon && <skill.icon className="mr-2 text-blue-400" size={20} />}
                    <span className="text-sm font-medium font-mono text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden skill-bar">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
              <FaHtml5 size={20} className="text-orange-500"/> <span className="text-sm font-mono text-gray-300">HTML</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <FaJs size={20} className="text-yellow-400" /> <span className="text-sm font-mono text-gray-300">JavaScript</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <SiTypescript size={20} className="text-blue-500"/> <span className="text-sm font-mono text-gray-300">TypeScript</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <FaPython size={20} className="text-blue-400"/> <span className="text-sm font-mono text-gray-300">Python</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
              <FaHtml5 size={20} className="text-orange-500"/> <span className="text-sm font-mono text-gray-300">HTML</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <FaCss3Alt size={20} className="text-blue-500"/> <span className="text-sm font-mono text-gray-300">CSS</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <SiTailwindcss size={20} className="text-cyan-400"/> <span className="text-sm font-mono text-gray-300">TailwindCSS</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
               <span className="text-sm font-mono text-gray-300">Shadcn</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <SiMongodb size={20} className="text-green-500"/> <span className="text-sm font-mono text-gray-300">MongoDB</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <FaJs size={20} className="text-yellow-400"/> <span className="text-sm font-mono text-gray-300">Express.Js</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <FaReact size={20} className="text-blue-400"/> <span className="text-sm font-mono text-gray-300">React.Js</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
              <FaNodeJs size={20} className="text-green-500"/> <span className="text-sm font-mono text-gray-300">Node.js</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <SiPostgresql size={20} className="text-blue-600"/> <span className="text-sm font-mono text-gray-300">SQL</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
              <SiFirebase size={20} className="text-yellow-500"/> <span className="text-sm font-mono text-gray-300">Firebase</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <FaGitAlt size={20} className="text-orange-600"/> <span className="text-sm font-mono text-gray-300">Git</span>
            </div>
            <div className="px-4 py-2 bg-gray-900/70 rounded-lg text-center flex items-center justify-center gap-2">
             <FaGithub size={20} className="text-white"/> <span className="text-sm font-mono text-gray-300">Github</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
