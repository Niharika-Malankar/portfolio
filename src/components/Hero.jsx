
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 via-white to-white" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(#dbeafe 1px, transparent 1px),
            linear-gradient(90deg, #dbeafe 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px"
        }}
      />

      {/* Floating symbols */}
      <div className="absolute inset-0 text-blue-200 text-3xl font-bold pointer-events-none">
        <span className="absolute top-20 left-40">&lt;/&gt;</span>
<span className="absolute top-40 left-80">{'{}'}</span>
<span className="absolute top-24 right-80">=&gt;</span>
<span className="absolute top-60 right-20">[]</span>
<span className="absolute bottom-40 left-60">()</span>
<span className="absolute bottom-60 right-96">++</span>
<span className="absolute top-80 left-[30%]">==</span>
<span className="absolute bottom-20 right-40">::</span>
<span className="absolute top-[45%] right-[15%]">{'{}'}</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-screen flex items-center justify-around">

        {/* Left */}
        <div className="max-w-3xl">

          {/* <p className="text-3xl text-gray-600 mb-6">
            Hello! 👋
          </p> */}

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Hi, I'm
          </h1>

          <h1 className="text-7xl lg:text-8xl font-black text-blue-600">
            Niharika Malankar
          </h1>

          <p className="mt-8 text-2xl text-gray-600 max-w-2xl">
            Building intelligent applications with React,
            JavaScript and Artificial Intelligence.
          </p>

          <div className="flex gap-4 mt-10">

           <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg inline-block"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-300 px-8 py-4 rounded-xl text-lg inline-block"
            >
              Contact Me
            </a>

          </div>

          <div className="flex gap-4 mt-10">

            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border rounded-xl flex items-center justify-center hover:bg-blue-50 text-2xl"
            >
              <FaGithub />
            </a>

            <a
                href="https://www.linkedin.com/in/niharika-malankar-773651376"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border rounded-xl flex items-center justify-center hover:bg-blue-50 text-2xl"
              >
                <FaLinkedin />
              </a>

            <a
                href="mailto:niharikamalankar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border rounded-xl flex items-center justify-center hover:bg-blue-50 text-2xl"
              >
                <FaEnvelope />
              </a>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative">
  <div className="absolute inset-0 bg-blue-200 blur-3xl rounded-full opacity-40 scale-110"></div>

  <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-8 border-blue-100 shadow-2xl">
    <img
      src="/profile.jpeg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>

    </section>
  );
}