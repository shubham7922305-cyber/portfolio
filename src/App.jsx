{/* ABOUT + SKILLS */}
<section className="py-24 px-6 max-w-6xl mx-auto">

  <div className="grid md:grid-cols-2 gap-12 items-start">

    {/* ABOUT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold mb-6">About Me</h2>

      <p className="text-gray-600 text-lg leading-relaxed">
        I recently graduated from WRS Govt College Dehri affiliated with HPU Shimla.
        Currently working with RP Tech Pvt Ltd and improving my frontend development skills.
      </p>

      <p className="mt-5 text-gray-600 text-lg leading-relaxed">
        My long-term goal is to become a full-stack developer and build impactful digital products.
      </p>
    </motion.div>

    {/* SKILLS */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
    >
      <h3 className="text-2xl font-bold mb-5">Skills</h3>

      <div className="flex flex-wrap gap-3">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React (Learning)",
          "Tailwind (Learning)",
          "Responsive UI",
          "WordPress",
          "Elementor",
          "WooCommerce",
          "Shopify (Basic)"
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
    <h2 className="text-4xl font-bold">Let's Work Together</h2>

    <p className="mt-5 text-gray-600 text-lg leading-relaxed">
      I’m always interested in learning new technologies and building exciting frontend projects.
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
        className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-full shadow-lg hover:scale-105 transition"
      >
        🔗 Connect on LinkedIn
      </a>
    </div>

  </motion.div>
</section>