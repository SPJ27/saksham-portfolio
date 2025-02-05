import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <p className="text-lg text-gray-500 font-medium">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              Saksham
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 font-semibold">
              Full Stack Developer
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              I build high-performance web applications with modern technologies like React, TypeScript, and cloud-native solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <Link
                to="/projects"
                className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
              >
                View Projects
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition"
              >
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6 flex justify-center md:justify-start gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Add more social links */}
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
              {/* Profile Image */}
              <img
                src="/path-to-your-image.jpg"
                alt="Saksham's Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;
