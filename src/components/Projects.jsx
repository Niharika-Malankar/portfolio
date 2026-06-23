export default function Projects() {
  const projects = [
    {
      title: "Skincare E-Commerce Website",
      description:
        "Modern skincare e-commerce website with responsive design and product showcase.",
      image: "/projects/skincare.png",
      demo:
        "https://niharika-malankar.github.io/skincare-ecommerce-website/",
      github: "https://github.com/niharika-malankar/skincare-ecommerce-website",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
  title: "Portfolio Website",
  description:
    "Personal portfolio built with React showcasing projects, certificates, and education.",
  image: "/projects/portfolio.png",
  demo: "https://portfolio-navy-rho-28.vercel.app/",
  github: "https://github.com/Niharika-Malankar/portfolio.git",
  tech: ["React", "JavaScript", "CSS"],
}
    // {
    //   title: "Weather App",
    //   description:
    //     "Real-time weather forecasting application using APIs and React.",
    //   image: "/projects/weather.png",
    //   demo: "#",
    //   github: "#",
    //   tech: ["React", "API", "JavaScript"],
    // },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-5xl font-black mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}