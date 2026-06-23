import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t bg-white py-16"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-black text-blue-600">
              Niharika Malankar
            </h2>

            <p className="mt-4 text-gray-600 max-w-md">
              AI & Machine Learning student passionate about
              web development, problem solving and building
              impactful digital experiences.
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-600">
              <p>📧 niharikamalankar@gmail.com</p>
              <p>📍 Maharashtra, India</p>
            </div>

            <div className="flex gap-4 mt-6">

              <a
                // href="https://github.com/Niharika-Malankar"
                // target="_blank"
                // rel="noopener noreferrer"
                className="w-12 h-12 border rounded-xl flex items-center justify-center hover:bg-blue-50"
            >
  <FaGithub />
</a>

              <a
                href="https://www.linkedin.com/in/niharika-malankar-773651376"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border rounded-xl flex items-center justify-center hover:bg-blue-50"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:niharikamalankar@gmail.com"
                className="w-12 h-12 border rounded-xl flex items-center justify-center hover:bg-blue-50"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        <div className="border-t mt-12 pt-6 text-center text-gray-500">
          © 2026 Niharika Malankar. Built with React & Tailwind CSS.
        </div>

      </div>
    </footer>
  );
}