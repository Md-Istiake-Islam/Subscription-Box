import React from "react";

const categories = [
   {
      title: "Gadget Box",
      description:
         "Latest tech, smart devices, and accessories delivered monthly.",
      icon: "💻",
   },
   {
      title: "Food Box",
      description: "Delicious snacks and gourmet treats from around the world.",
      icon: "🍱",
   },
   {
      title: "Beauty Box",
      description: "Top-rated skincare, makeup, and wellness products.",
      icon: "💄",
   },
   {
      title: "Entertainment Box",
      description: "Fun collectibles, games, and movie-night surprises.",
      icon: "🎬",
   },
];

function HomeHighlightSection() {
   return (
      <div className="py-12 px-4 max-w-7xl mx-auto">
         <h2 className="text-3xl font-bold text-center mb-8">
            What’s in Your Box?
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
               <div
                  key={index}
                  className="card bg-base-100 shadow hover:shadow-lg transition"
               >
                  <div className="card-body items-center text-center">
                     <div className="text-5xl">{item.icon}</div>
                     <h3 className="card-title mt-2">{item.title}</h3>
                     <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default HomeHighlightSection;
