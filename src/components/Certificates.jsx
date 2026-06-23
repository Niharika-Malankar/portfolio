export default function Certificates() {
  const certificates = [
    "React Development",
    "Python Programming",
    "Machine Learning",
    "JavaScript Essentials",
  ];

  return (
    <section
      id="certificates"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-5xl font-black mb-16">
        Certificates
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((certificate) => (
          <div
            key={certificate}
            className="bg-white border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold">
              {certificate}
            </h3>

            <p className="text-gray-500 mt-2">
              Verified Certificate
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}