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
    <section id="about" className="max-w-5xl mx-auto px-8 py-24">
      <div className="bg-white rounded-3xl border p-12 shadow-sm">

        <h2 className="text-5xl font-black mb-6">
          About Me
        </h2>

        <div className="w-40 h-1 bg-blue-600 rounded mb-10"></div>

        <p className="text-xl text-slate-600 leading-relaxed">
          I'm an AI & Machine Learning student passionate about web
          development, problem solving, and building impactful digital
          experiences. I enjoy building modern applications with React,
          exploring Artificial Intelligence, and continuously learning
          new technologies to improve my skills.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-gray-50 rounded-2xl p-5">
            <h3 className="font-bold text-lg mb-2">
              🎓 Education
            </h3>
            <p className="text-slate-600">
              Diploma in AI & Machine Learning
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <h3 className="font-bold text-lg mb-2">
              📍 Location
            </h3>
            <p className="text-slate-600">
              Maharashtra, India
            </p>
          </div>

        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 bg-blue-50 border border-blue-100 rounded-full font-medium hover:bg-blue-100 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}