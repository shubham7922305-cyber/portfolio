import { motion } from "framer-motion";

export default function App() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio website.",
      link: "https://shubham.mybroo.pro/",
    },
    {
      title: "MyBroo Platform",
      desc: "Professional frontend website platform.",
      link: "https://mybroo.pro/",
    },
    {
      title: "Little Blossoms Preschool",
      desc: "Responsive preschool website UI.",
      link: "https://shubham7922305-cyber.github.io/Little-Blossoms-Preschool/",
    },
    {
      title: "RP Tech Latest Posts",
      desc: "Dynamic production posts platform.",
      link: "https://hplatestposts.rptechweb.in/",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-gray-800 overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 blur-3xl rounded-full opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 blur-3xl rounded-full opacity-40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl relative z-10"
        >

          <p className="uppercase tracking-[5px] text-blue-600 font-semibold mb-4">
            Frontend Developer
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
            Hi, I'm <span className="text-blue-600">Subham Kumar</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Passionate about building modern, responsive and interactive
            frontend web experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="#projects"
              className="px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition duration-300 shadow-xl"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </motion.div>
      </section>

      {/* ABOUT + SKILLS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              I recently graduated from WRS Govt College Dehri affiliated with
              HPU Shimla. Currently working with RP Tech Pvt Ltd and improving
              my frontend development skills.
            </p>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              My long-term goal is to become a full-stack developer and build
              impactful digital products.
            </p>

          </motion.div>

          {/* SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
          >

            <h3 className="text-2xl font-bold mb-5">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Responsive UI",
                "WordPress",
                "Elementor",
                "WooCommerce",
                "Shopify (Basic)",
                "Git & GitHub",
                "Frontend Development",
              ].map((skill, i) => (

                <span
                  key={i}
                  className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-medium hover:scale-105 transition"
                >
                  {skill}
                </span>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
              Featured Projects
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Some projects I have worked on recently.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project, i) => (

              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="bg-[#f8fafc] rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300"
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <span className="text-2xl">
                    ↗
                  </span>

                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {project.desc}
                </p>

              </motion.a>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 text-center bg-gradient-to-r from-blue-50 to-purple-50"
      >

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >

          <h2 className="text-4xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            I’m always interested in learning new technologies and building
            exciting frontend projects.
          </p>

          {/* EMAIL BUTTON */}
          <div className="mt-8">

            <a
              href="mailto:shubham7922305@gmail.com"
              className="inline-block px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition duration-300 shadow-xl"
            >
              Send Email
            </a>

          </div>

          {/* LINKEDIN BUTTON */}
          <div className="mt-6 flex justify-center">

            <a
              href="https://www.linkedin.com/in/shubham-kumar-3491173a1/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-[#0A66C2] text-white rounded-full hover:scale-105 transition duration-300 shadow-xl"
            >
              🔗 LinkedIn Profile
            </a>

          </div>

        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-100 bg-white">
        © 2026 Subham Kumar • Built with love & care ❤️
      </footer>

    </div>
  );
}