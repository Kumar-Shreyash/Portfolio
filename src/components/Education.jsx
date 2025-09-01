// import cbse from "../assets/cbse.webp"
// import bbmku from "../assets/bbmku.webp"
// import masai from "../assets/masai.webp"

// export const Education = () => {
//     const educationData = [
//       {
//         degree: "Full Stack Software Development",
//         institution: "Masai School, Bengaluru",
//         year: "2023 - Present",
//         imgSrc: masai, // Add image source if available
//         alt: "Masai School Logo",
//       },
//       {
//         degree: "Bachelors of Commerce",
//         institution: "BBMKU, Dhanbad",
//         year: "2016 - 2019",
//         imgSrc: bbmku, // Add image source if available
//         alt: "BBMKU Logo",
//       },
//       {
//         degree: "Intermediate",
//         institution: "Indian School of Learning, Jharia",
//         year: "2016",
//         imgSrc: cbse, // Add image source if available
//         alt: "Indian School Logo",
//       },
//     ];
  
//     return (
//       <section
//         id="education"
//         className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-gray-50 font-sans"
//       >
//         <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-gray-800">
//           Education
//         </h2>
  
//         <div className="w-full max-w-4xl space-y-8">
//           {educationData.map(({ degree, institution, year, imgSrc, alt }, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex items-center gap-6"
//             >
//               {imgSrc ? (
//                 <img
//                   src={imgSrc}
//                   alt={alt}
//                   className="w-20 h-20 object-contain rounded-xl shadow"
//                 />
//               ) : (
//                 <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-semibold">
//                   No Image
//                 </div>
//               )}
  
//               <div>
//                 <p className="text-lg font-semibold text-blue-800">{degree}</p>
//                 <p className="text-gray-600">{institution}</p>
//                 <p className="text-sm text-gray-500 mt-1">{year}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  


import cbse from "../assets/cbse.webp";
import bbmku from "../assets/bbmku.webp";
import masai from "../assets/masai.webp";

export const Education = () => {
  const educationData = [
    {
      degree: "Full Stack Software Development",
      institution: "Masai School, Bengaluru",
      year: "2023 - Present",
      imgSrc: masai,
      alt: "Masai School Logo",
    },
    {
      degree: "Bachelors of Commerce",
      institution: "BBMKU, Dhanbad",
      year: "2016 - 2019",
      imgSrc: bbmku,
      alt: "BBMKU Logo",
    },
    {
      degree: "Higher Secondary",
      institution: "Indian School of Learning, Jharia",
      year: "2016",
      imgSrc: cbse,
      alt: "Indian School Logo",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-gray-50 font-sans"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-gray-900">
        Education
      </h2>

      <div className="w-full max-w-4xl space-y-12">
        {educationData.map(({ degree, institution, year, imgSrc, alt }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 p-6 bg-white rounded-3xl
                       border-l-4 border-green-500 shadow-md
                       hover:shadow-green-400/50 hover:bg-gradient-to-r from-green-50 to-white
                       transition-all duration-400 transform hover:-translate-y-1 cursor-pointer"
          >
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={alt}
                className="w-24 h-24 object-contain rounded-xl shadow-sm
                           transition-all duration-400
                           hover:scale-110 hover:ring-4 hover:ring-green-400"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-semibold">
                No Image
              </div>
            )}

            <div>
              <p className="text-xl font-extrabold text-green-600">{degree}</p>
              <p className="text-gray-700 mt-1 text-lg">{institution}</p>
              <p className="text-sm text-gray-500 mt-2">{year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
