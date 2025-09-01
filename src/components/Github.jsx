import GitHubCalendar from "react-github-calendar";

export const Github = () => {
  return (
    <div
      id="github"
      className="min-h-screen p-10 md:p-20 bg-white text-gray-900"
    >
      <h1 className=" text-center text-5xl md:text-5xl font-bold mb-16 md:mb-20">
        Github Stats
      </h1>

      {/* GitHub Contributions Calendar */}
      <div className="max-w-[900px] mx-auto mb-16">
        <GitHubCalendar username="Kumar-Shreyash" />
      </div>

      {/* GitHub Stat Cards */}
      <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 max-w-6xl mx-auto px-4 justify-center">
        {/* Top Languages */}
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kumar-Shreyash&layout=compact&theme=tokyonight"
          alt="Top Langs"
          className="w-full md:w-2/5 max-w-[400px] rounded-xl shadow-lg hover:shadow-green-200 hover:scale-105 transition-transform duration-300"
        />

        {/* GitHub Stats */}
        <img
          src="https://github-readme-stats.vercel.app/api?username=Kumar-Shreyash&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
          className="w-full md:w-2/5 max-w-[400px] rounded-xl shadow-lg hover:shadow-green-200 hover:scale-105 transition-transform duration-300"
        />

        {/* GitHub Streak */}
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Kumar-Shreyash&theme=tokyonight"
          alt="GitHub Streak"
          className="w-full md:w-2/5 max-w-[400px] rounded-xl shadow-lg hover:shadow-green-200 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
