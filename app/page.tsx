const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MongoDB",
];

const projects = [
  {
    number: "01",
    title: "WinterCare",
    subtitle: "Community Winter Donation Platform",
    description:
      "A community-driven web platform that helps people organize, discover, and participate in winter donation events to support underprivileged communities.",
    features: [
      "Users can create, explore, and manage winter donation events.",
      "Secure authentication with Email and Google login.",
      "Responsive and user-friendly interface.",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
    ],
    link: "https://wintercare-client.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d19] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080d19]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-extrabold">
            SHOROT<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-gray-300 md:flex">
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#education" className="hover:text-cyan-400">
              Education
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-300"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto flex min-h-[650px] max-w-6xl flex-col justify-center px-6 py-24"
      >
        <p className="mb-6 w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
          👋 Hello, Welcome to my Portfolio
        </p>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
          I'm MD. SHAHARIAR
          <br />
          <span className="text-cyan-400">HOSSEN</span>
        </h1>

        <h2 className="mt-6 text-xl font-semibold text-gray-300 md:text-2xl">
          Aspiring Front-End Web Developer
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
          Passionate about building responsive and user-friendly web
          applications using modern web technologies. I enjoy learning, solving
          problems, and turning ideas into real-world digital experiences.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-7 py-3 font-bold text-black transition hover:bg-cyan-300"
          >
            Explore My Projects ↗
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-white/20 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-400">
          <span>📍 Jamalpur, Bangladesh</span>
          <span>💻 Web Developer</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 bg-[#101829]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Get to Know Me
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            <p className="leading-9 text-gray-400">
              I am an aspiring Front-End Web Developer with a strong foundation
              in HTML, CSS, JavaScript, React, and Next.js. Currently, I am
              studying Computer Science and Technology at Mymensingh Polytechnic
              Institute.
            </p>

            <p className="leading-9 text-gray-400">
              I am passionate about developing modern, responsive, and
              user-friendly websites. I enjoy working on practical projects,
              learning new technologies, and improving my problem-solving
              skills.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
          My Expertise
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-[#101829] p-6 text-center font-semibold text-gray-200 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10 bg-[#101829]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            My Recent Work
          </p>

          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="rounded-2xl border border-white/10 bg-[#080d19] p-7 transition hover:border-cyan-400/60"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-4xl font-extrabold text-cyan-400/40">
                    {project.number}
                  </span>
                  <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300">
                    Featured Project
                  </span>
                </div>

                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-2 text-sm text-cyan-400">{project.subtitle}</p>

                <p className="mt-5 leading-8 text-gray-400">
                  {project.description}
                </p>

                <h4 className="mb-3 mt-6 font-semibold">Key Features</h4>

                <ul className="space-y-3 text-sm leading-6 text-gray-400">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-cyan-400">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  View Live Project ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
          My Background
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-4xl">Education</h2>

        <div className="space-y-5">
          <div className="rounded-xl border border-white/10 bg-[#101829] p-7">
            <div className="flex flex-wrap justify-between gap-3">
              <h3 className="text-lg font-bold">
                Computer Science & Technology
              </h3>
              <span className="text-sm text-cyan-400">2024 – Present</span>
            </div>

            <p className="mt-3 text-gray-400">
              Mymensingh Polytechnic Institute
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#101829] p-7">
            <div className="flex flex-wrap justify-between gap-3">
              <h3 className="text-lg font-bold">
                Science – Secondary School Certificate
              </h3>
              <span className="text-sm text-cyan-400">2023</span>
            </div>

            <p className="mt-3 text-gray-400">
              Nandina M.H.K Govt. Pilot High School
            </p>

            <p className="mt-3 text-sm text-gray-400">
              GPA: <span className="font-bold text-cyan-400">4.83</span> ·
              Jamalpur, Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 bg-[#101829]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-cyan-400">
            Contact Me
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Let's Build Something Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            I am looking forward to new opportunities, collaborations, and
            challenges where I can learn and contribute my skills.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4">
            <a
              href="mailto:mdshahariarhossenshorot21@gmail.com"
              className="rounded-xl border border-white/10 p-5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              ✉ mdshahariarhossenshorot21@gmail.com
            </a>

            <a
              href="tel:01812708893"
              className="rounded-xl border border-white/10 p-5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              ☎ 01812708893
            </a>

            <a
              href="https://www.linkedin.com/in/shahariar-shorot-294139431/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 p-5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn Profile ↗
            </a>

            <a
              href="https://github.com/shahariarshorot21"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 p-5 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © <p>© 2026 MD. SHAHARIAR HOSSEN. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
