export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "AI/ML",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <div className="bg-white rounded-3xl border p-12 shadow-sm">
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-5xl font-black mb-6">
              About Me
            </h2>

            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>

          <div>
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm an AI & Machine Learning student passionate
              about web development, problem solving and
              building impactful digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 bg-gray-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}