import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/javascript.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import gsap from "../assets/gsap.webp";
import nodejs from "../assets/node.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import tailwind from "../assets/tailwind.svg";

import vscode from "../assets/vscode.svg";
import postman from "../assets/postman.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";

export const Skills = () => {
  const techStack = [
    { name: "HTML5", img: html },
    { name: "CSS3", img: css },
    { name: "JavaScript", img: js },
    { name: "React", img: react },
    { name: "Redux", img: redux },
    { name: "GSAP", img: gsap },
    { name: "Node.js", img: nodejs },
    { name: "Express", img: express },
    { name: "MongoDB", img: mongodb },
    { name: "TailwindCSS", img: tailwind },
  ];

  const tools = [
    { name: "VS Code", img: vscode },
    { name: "Postman", img: postman },
    { name: "Git", img: git },
    { name: "GitHub", img: github },
  ];

  return (
    <div id="skills" className="p-10 max-w-5xl mx-auto font-sans">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center mt-10 whitespace-nowrap overflow-x-auto">
        Tech Stack & Tools
      </h1>

      {/* Tech Stack Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-green-600 inline-block">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center text-gray-700"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-16 h-16 mb-3 object-contain"
              />
              <p className="text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-green-600 inline-block">
          Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center text-gray-700"
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="w-16 h-16 mb-3 object-contain"
              />
              <p className="text-lg font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
