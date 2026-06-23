export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio built using React and Tailwind CSS.",
    },
    {
      title: "AI Chat App",
      description:
        "Chat application powered by AI APIs and modern frontend technologies.",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather forecasting application using React.",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-5xl font-black mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border rounded-3xl p-8 hover:shadow-xl transition"
          >
            <span className="text-blue-600 text-sm">
              Project
            </span>

            <h3 className="text-3xl font-bold mt-4">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-600">
              {project.description}
            </p>

            <button className="mt-6 text-blue-600 font-semibold">
              View Project →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}