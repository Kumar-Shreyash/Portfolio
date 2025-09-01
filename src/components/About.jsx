// import resume from "../assets/Kumar_Shreyash_Resume.pdf";
// import shreyash from "../assets/shreyash.webp";

// export const About = () => {
//   const handleResumeClick = () => {
//     window.open(resume, "_blank");

//     const link = document.createElement("a");
//     link.href = resume;
//     link.download = "Kumar_Shreyash_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section
//       id="about"
//       className="min-h-screen px-6 py-16 bg-white flex flex-col items-center justify-center"
//     >
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
//         {/* Responsive & Hover-Enhanced Profile Image */}
//         <div className="relative group w-64 sm:w-72 aspect-square mx-auto">
//           <div className="rounded-full overflow-hidden border-4 border-green-600 shadow-xl transition-transform duration-500 ease-in-out transform group-hover:scale-105">
//             <img
//               src={shreyash}
//               alt="Kumar Shreyash"
//               className="w-full h-full object-cover cursor-pointer"
//             />
//           </div>
//           <div className="absolute inset-0 rounded-full border-4 border-green-300 opacity-0 group-hover:opacity-100 transition duration-500 z-[-1]" />
//         </div>

//         {/* About Content */}
//         <div className="text-center md:text-left">
//           <h2 className=" text-4xl sm:text-5xl font-bold text-green-700 mb-4">
//             Kumar Shreyash
//           </h2>
//           <h3 className="text-xl text-gray-800 font-medium mb-6">
//             Full Stack Web Developer 
//           </h3>

//           <p className="text-gray-600 mb-4">
//             I’m passionate about building fast, accessible, and scalable web applications. With a strong foundation in JavaScript and modern web technologies, I strive to bring ideas to life with clean and maintainable code.
//           </p>

//           {/* Skill Highlights */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//             <div className="bg-green-50 p-4 rounded-lg shadow-sm">
//               <h4 className="text-lg font-semibold text-green-700">Languages</h4>
//               <p className="text-gray-600 text-sm">JavaScript, TypeScript</p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-lg shadow-sm">
//               <h4 className="text-lg font-semibold text-green-700">Frameworks</h4>
//               <p className="text-gray-600 text-sm">React, Node.js, Express</p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-lg shadow-sm">
//               <h4 className="text-lg font-semibold text-green-700">Tools</h4>
//               <p className="text-gray-600 text-sm">
//                 Git, GitHub, Vite, VS Code, Postman, MongoDB
//               </p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-lg shadow-sm">
//               <h4 className="text-lg font-semibold text-green-700">Soft Skills</h4>
//               <p className="text-gray-600 text-sm">Problem-solving, Teamwork</p>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//             <a
//               href="#projects"
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition text-center"
//             >
//               View Projects
//             </a>
//             <button
//               onClick={handleResumeClick}
//               className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition"
//             >
//               Download Resume
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import resume from "../assets/Kumar_Shreyash_Resume.pdf";
import shreyash from "../assets/shreyash.webp";
import { useEffect, useState } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // fade in effect
  }, []);

  const handleResumeClick = () => {
    window.open(resume, "_blank");

    const link = document.createElement("a");
    link.href = resume;
    link.download = "Kumar_Shreyash_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className={`min-h-screen px-6 py-16 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <div className="relative group w-72 aspect-square mx-auto rounded-full shadow-2xl border-8 border-green-600 overflow-hidden transform transition-transform duration-700 ease-in-out hover:scale-110 hover:shadow-green-400/50">
          <img
            src={shreyash}
            alt="Kumar Shreyash"
            className="w-full h-full object-cover cursor-pointer rounded-full"
          />
          <div className="absolute inset-0 rounded-full border-4 border-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[-1]" />
        </div>

        {/* About Content */}
        <div className="text-center md:text-left space-y-6 px-4 sm:px-0">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-green-700 tracking-wide leading-tight">
            Kumar Shreyash
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 tracking-wide">
            Full Stack Web Developer
          </h3>

          <p className="text-gray-700 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed tracking-wide">
            I’m passionate about building fast, accessible, and scalable web applications. With a strong foundation in JavaScript and modern web technologies, I strive to bring ideas to life with clean and maintainable code.
          </p>

          {/* Skill Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto md:mx-0">
            {[
              { title: "Languages", skills: "JavaScript, TypeScript" },
              { title: "Frameworks", skills: "React, Node.js, Express" },
              { title: "Tools", skills: "Git, GitHub, Vite, VS Code, Postman, MongoDB" },
              { title: "Soft Skills", skills: "Problem-solving, Teamwork" },
            ].map(({ title, skills }) => (
              <div
                key={title}
                className="bg-green-100 p-5 rounded-xl shadow-md border border-green-200"
              >
                <h4 className="text-lg font-semibold text-green-700 mb-1">
                  {title}
                </h4>
                <p className="text-gray-700 text-sm">{skills}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-6">
            <a
              href="#projects"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out text-lg"
            >
              View Projects
            </a>
            <button
              onClick={handleResumeClick}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out text-lg"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
