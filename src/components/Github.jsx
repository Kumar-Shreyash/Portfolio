import GitHubCalendar from "react-github-calendar";

export const Github = () => {
  return (
    <div
      id="github"
      className="min-h-screen p-10 md:p-20 bg-white text-gray-900"
    >
      <h1 className="mt-16 text-center text-5xl md:text-5xl font-bold mb-16 md:mb-20">
        Github Stats
      </h1>

      <div className="max-w-[900px] mx-auto mb-16">
        <GitHubCalendar username="shreyash139-eren" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto px-4 justify-center">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=shreyash139-eren&layout=compact&theme=tokyonight"
          alt="Top Langs"
          className="w-full md:w-2/5 max-w-[400px] rounded-lg shadow-lg"
        />

        <img
          src="https://github-readme-stats.vercel.app/api?username=shreyash139-eren&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
          className="w-full md:w-2/5 max-w-[400px] rounded-lg shadow-lg"
        />

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=shreyash139-eren&theme=tokyonight"
          alt="GitHub Streak"
          className="w-full md:w-2/5 max-w-[400px] rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};
