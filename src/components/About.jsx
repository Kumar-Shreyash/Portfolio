import resume from "../assets/Kumar_Shreyash_Resume.pdf";

export const About = () => {
  const handleResumeClick = () => {
    // Open resume in new tab
    window.open(resume, "_blank");

    // Create a temporary <a> element to download the file
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Kumar_Shreyash_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-6 py-12"
    >
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4722.jpg"
            alt="Kumar Shreyash"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-10 text-center md:text-left">
          <div className="mb-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-2">
              Kumar Shreyash
            </h1>
            <h3 className="text-2xl text-gray-800 font-semibold">
              Full Stack Web Developer
            </h3>
          </div>

          <p className="text-gray-600 mb-3">
            Crafting clean, modern web applications from front to back.
          </p>
          <p className="text-gray-600 mb-3">
            Specializing in JavaScript and the MERN stack.
          </p>
          <p className="text-gray-600 mb-6">
            Constantly learning, building, and improving.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 text-center"
            >
              View My Work
            </a>

            <button
              onClick={handleResumeClick}
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition duration-300 text-center"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
