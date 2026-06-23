import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t bg-blue-50 py-20"
    >
      {/* Background Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-4xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-black text-blue-600">
          Let's Connect
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, internships,
          projects, or simply to connect. I'm always open to
          discussing technology, AI, and new opportunities.
        </p>

        {/* Email */}
        <a
          href="mailto:niharikamalankar@gmail.com"
          className="block mt-10 text-2xl font-semibold text-blue-600 hover:underline"
        >
          📧 niharikamalankar@gmail.com
        </a>

        {/* Location */}
        <p className="mt-3 text-lg text-gray-600">
          📍 Maharashtra, India
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-10">

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 border rounded-2xl flex items-center justify-center text-xl hover:bg-blue-50 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/niharika-malankar-773651376"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 border rounded-2xl flex items-center justify-center text-xl hover:bg-blue-50 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:niharikamalankar@gmail.com"
            className="w-14 h-14 border rounded-2xl flex items-center justify-center text-xl hover:bg-blue-50 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Bottom Line */}
        <div className="border-t mt-16 pt-6 text-gray-500">
          © 2026 Niharika Malankar. All rights reserved.
        </div>

      </div>
    </footer>
  );
}