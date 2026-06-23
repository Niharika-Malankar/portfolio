import { useState } from "react";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "AI Skill Passport",
      image: "/certificates/microsoft.jpeg",
    },
    {
      title: "AI and future Technologies",
      image: "/certificates/coding chaska.jpg",
    },
  ];

  return (
    <>
      <section
        id="certificates"
        className="max-w-7xl mx-auto px-8 py-24"
      >
        <h2 className="text-5xl font-black mb-16">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCertificate(cert)}
              className="cursor-pointer bg-white border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {cert.title}
                </h3>

                <p className="text-blue-600 mt-2 font-medium">
                  Click to View →
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
            >
              ×
            </button>

            {/* Certificate Image */}
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />

            {/* Title */}
            <h3 className="text-white text-center text-2xl font-bold mt-4">
              {selectedCertificate.title}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}