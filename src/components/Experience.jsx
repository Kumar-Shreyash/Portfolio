import cognizant from "../assets/cognizant.webp";
import rinovea from "../assets/rinovea.webp";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full flex items-center justify-center py-20 px-4 bg-gray-50 font-sans"
    >
      <div className="w-full max-w-5xl space-y-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800">
          Experience
        </h2>

        {/* ================= Cognizant ================= */}
        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 md:p-12 hover:scale-[1.03] transform">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src={cognizant}
              alt="Cognizant"
              className="w-24 h-24 object-contain rounded-xl shadow transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 transition-colors duration-300 hover:text-blue-600">
                Cognizant
              </h3>
              <p className="text-lg text-gray-700 font-semibold">
                Process Executive
              </p>
              <p className="text-sm text-gray-500">Dec 2023 – Feb 2025</p>
            </div>
          </div>

          {/* Description Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Responsibilities
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Processed high-volume transactional data with 100% accuracy.
                </li>
                <li>
                  Maintained strict process compliance and quality control.
                </li>
                <li>
                  Worked closely with internal teams to resolve data
                  discrepancies.
                </li>
                <li>
                  Ensured timely and error-free documentation and reporting.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Achievements
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Zero escalations recorded during entire tenure.</li>
                <li>
                  Improved team accuracy metrics through training support.
                </li>
                <li>
                  Commended by management for attention to detail and
                  reliability.
                </li>
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full">Excel</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                MS Office Suite
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Outlook
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Internal Reporting Tools
              </span>
            </div>
          </div>

          {/* Reflection */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Personal Reflection
            </h4>
            <p className="text-gray-700 leading-relaxed">
              My experience at Cognizant helped me build a strong foundation in
              data accuracy, process compliance, and teamwork. It strengthened
              my ability to perform under pressure while maintaining quality.
            </p>
          </div>
        </div>

        {/* ================= Rinovea ================= */}
        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 md:p-12 hover:scale-[1.03] transform">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <img
              src={rinovea}
              alt="Rinovea"
              className="w-24 h-24 object-contain rounded-xl shadow transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 transition-colors duration-300 hover:text-blue-600">
                Rinovea
              </h3>
              <p className="text-lg text-gray-700 font-semibold">
                Software Engineer I – Product Development
              </p>
              <p className="text-sm text-gray-500">Dec 2025 – Present</p>
            </div>
          </div>

          {/* Description Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Responsibilities
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Contributed to backend development using Golang under the
                  guidance of senior engineers.
                </li>
                <li>
                  Assisted in building and maintaining frontend components using
                  React.
                </li>
                <li>
                  Implemented REST API integrations between frontend and backend
                  services.
                </li>
                <li>
                  Fixed bugs, performed code refactoring, and wrote clean,
                  readable code.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Achievements
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Onboarded successfully into a production Go + React codebase.
                </li>
                <li>Delivered assigned tasks within timelines.</li>
                <li>Improved understanding of full-stack workflows.</li>
                <li>Received positive feedback for learning attitude.</li>
              </ul>
            </div>
          </div>

          {/* Tools */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="bg-gray-100 px-3 py-1 rounded-full">Golang</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">React</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                JavaScript
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                REST APIs
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">Git</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">GitLab</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Postman
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">
                Basic SQL
              </span>
            </div>
          </div>

          {/* Reflection */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Personal Reflection
            </h4>
            <p className="text-gray-700 leading-relaxed">
              As a fresher, this role has given me real-world exposure to
              product development. I’ve learned how backend and frontend systems
              work together and how to collaborate effectively within an
              engineering team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
