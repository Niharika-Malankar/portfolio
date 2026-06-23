export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        

        <div className="flex gap-12 text-xl font-medium">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}